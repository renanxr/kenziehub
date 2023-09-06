import { forwardRef } from "react";
import { StyledInput } from "../../styles/form";

export const Input = forwardRef(({ error, ...rest }, ref) => {
	return (
		<div>
			<StyledInput ref={ref} {...rest} />
			{error ? <p>{error.message}</p> : null}
		</div>
	);
});
