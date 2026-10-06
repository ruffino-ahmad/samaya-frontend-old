import {
  Rectangles4,
  Gear,
  Wallet,
  Calendar,
  Tag,
  Bookmark,
} from "@gravity-ui/icons";

const SIDEBAR_MEMBER = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "/member",
    icon: <Rectangles4 />,
  },
  {
    key: "setting",
    label: "Setting",
    href: "/member/setting",
    icon: <Gear />,
  },
  {
    key: "transaction",
    label: "Transaction",
    href: "/member/transaction",
    icon: <Wallet />,
  },
];

const SIDEBAR_ADMIN = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "/admin",
    icon: <Rectangles4 />,
  },
  {
    key: "event",
    label: "Event",
    href: "/admin/event",
    icon: <Calendar />,
  },
  {
    key: "category",
    label: "Category",
    href: "/admin/category",
    icon: <Tag />,
  },
  {
    key: "banner",
    label: "Banner",
    href: "/admin/banner",
    icon: <Bookmark />,
  },
  {
    key: "transaction",
    label: "Transaction",
    href: "/admin/transaction",
    icon: <Wallet />,
  },
];

export { SIDEBAR_ADMIN, SIDEBAR_MEMBER };
