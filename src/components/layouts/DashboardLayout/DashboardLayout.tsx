import { Bars } from "@gravity-ui/icons";
import PageHead from "@/components/commons/Pagehead/pageHead";
import { ReactNode, useState } from "react";
import DashboardLayoutSidebar from "./DashboardLayoutSidebar";
import { SIDEBAR_ADMIN, SIDEBAR_MEMBER } from "./DashboardLayout.constans";
import { Button } from "@heroui/react";

interface PropTypes {
  children: ReactNode;
  title?: string;
  type: string;
  description?: string;
}

const DashboardLayout = (props: PropTypes) => {
  const { children, description, title, type = "admin" } = props;
  const [open, setOpen] = useState(false);
  return (
    <>
      <PageHead title={title} />
      <div className="max-w-screen-3xl 3xl:container flex">
        <DashboardLayoutSidebar
          sidebarItems={type === "admin" ? SIDEBAR_ADMIN : SIDEBAR_MEMBER}
          isOpen={open}
        />
        <div className="h-screen w-full overflow-y-auto p-8">
          <header className="mb-6 flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="text-small text-default-500">{description}</p>
            </div>
            <Button
              isIconOnly
              variant="ghost"
              aria-label={open ? "Close menu" : "Open menu"}
              onPress={() => setOpen((prev) => !prev)}
              className="lg:hidden"
            >
              <Bars />
            </Button>
          </header>
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
