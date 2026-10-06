import { Button, Label, ListBox, ListBoxItem } from "@heroui/react";
import { signOut } from "next-auth/react";
import { JSX } from "react/jsx-runtime";
import { ArrowRightFromSquare } from "@gravity-ui/icons";
import Image from "next/image";
import { useRouter } from "next/router";
import { cn } from "@/utils/cn";

interface SidebarItems {
  key: string;
  label: string;
  href: string;
  icon: JSX.Element;
}

interface PropTypes {
  sidebarItems: SidebarItems[];
  isOpen: boolean;
}

const DashboardLayoutSidebar = (props: PropTypes) => {
  const { sidebarItems, isOpen } = props;
  const router = useRouter();
  return (
    <div
      className={cn(
        "border-default-200 -y-6 lg: fixed z-50 flex h-screen w-full max-w-[300px] -translate-x-full flex-col justify-between border-r-1 bg-white px-4 transition-all lg:relative lg:translate-x-0",
        {
          "translate-x-0": isOpen,
        },
      )}
    >
      <div>
        <div className="flex w-full justify-center">
          <Image
            src="/images/general/logo.svg"
            alt="Logo"
            width={180}
            height={60}
            className="mt-5 mb-6 w-32"
            onClick={() => router.push("/")}
          />
        </div>
        <div>
          <ListBox items={sidebarItems} aria-label="Dashboard Menu">
            {(item) => (
              <ListBox.Item
                id={item.key}
                textValue={item.label}
                aria-label={item.label}
                className={cn("my-1 h-12 text-2xl", {
                  "bg-danger text-white": router.pathname.startsWith(item.href),
                })}
              >
                {item.icon}
                <Label
                  className={cn("text-small", {
                    "text-white": item.href === router.pathname,
                  })}
                >
                  {item.label}
                </Label>
              </ListBox.Item>
            )}
          </ListBox>
        </div>
      </div>
      <div className="item-center flex p-1">
        <Button
          // variant="outline"
          fullWidth
          className="text-danger border-danger hover:bg-danger/10 flex justify-start rounded-lg bg-white px-2 py-1.5"
          size="lg"
          onClick={() => signOut()}
        >
          <ArrowRightFromSquare />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default DashboardLayoutSidebar;
