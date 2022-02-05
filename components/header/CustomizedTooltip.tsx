import * as React from "react";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const CustomizedTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
        fontSize: theme.typography.pxToRem(14),
        color: "rgb(223, 223, 223)",
        fontWeight: "400",
        padding: "10px",
    },
}));

export default function CustomTooltip({
    title,
    children,
}: {
    title: string;
    children: React.ReactElement;
}) {
    return <CustomizedTooltip title={title}>{children}</CustomizedTooltip>;
}
