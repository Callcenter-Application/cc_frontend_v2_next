import {FC} from "react";
import { getInitials } from "@/src/data/users.data";

export interface UserAvatarProps {
    firstname?: string;
    lastname?: string;
    initials?: string;
    variant?: "table" | "header";
    className?: string;
}

export const UserAvatar: FC<UserAvatarProps> = ({
    firstname,
    lastname,
    initials,
    variant = "table",
    className = "",
}) => {
    const displayInitials = initials ?? (firstname && lastname ? getInitials(firstname, lastname) : "");

    const variantClasses =
        variant === "header"
            ? "w-[34px] h-[34px] rounded-full bg-[#CFE3F5] text-[#14466F] text-[13px] font-semibold"
            : "w-[34px] h-[34px] shrink-0 rounded-full bg-[#E1EEF9] text-[#1E4A73] text-[12px] font-semibold";

    return (
        <div
            className={`flex items-center justify-center select-none ${variantClasses} ${className}`}
            aria-hidden="true"
        >
            {displayInitials}
        </div>
    );
};

export default UserAvatar;
