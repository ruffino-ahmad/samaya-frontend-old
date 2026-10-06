import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { LoginFormValues, loginSchema } from "../schemas/login.schema";
import { signIn } from "next-auth/react";

const useLogin = () => {
  const router = useRouter();
  const [visiblePassword, setVisiblePassword] = useState(false);

  const handleVisiblePassword = () => setVisiblePassword(!visiblePassword);

  const callBackUrl: string = (router.query.callbackUrl as string) || "/";

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const loginService = async (payload: LoginFormValues) => {
    const result = await signIn("credentials", {
      ...payload,
      redirect: false,
      callbackUrl: callBackUrl,
    });
    if (result?.error && result?.status === 401) {
      throw new Error("Invalid email/username or password");
    }
  };

  const { mutate: mutateLogin, isPending: isPendingLogin } = useMutation({
    mutationFn: loginService,
    onError: (error) => {
      setError("root", {
        message: error.message,
      });
    },
    onSuccess: () => {
      router.push(callBackUrl);
      reset();
    },
  });

  const handleLogin = (data: LoginFormValues) => mutateLogin(data);

  return {
    visiblePassword,
    handleVisiblePassword,
    control,
    handleSubmit,
    handleLogin,
    isPendingLogin,
    errors,
  };
};

export default useLogin;
