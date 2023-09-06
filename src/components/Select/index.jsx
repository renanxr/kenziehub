import { forwardRef } from "react";
import { StyledSelect } from "../../styles/form";

export const Select = forwardRef(({ children, error, ...rest }, ref) => {
	return (
		<div>
			<StyledSelect ref={ref} {...rest}>
				{children}
			</StyledSelect>
			{error ? <p>{error.message}</p> : null}
		</div>
	);
});
