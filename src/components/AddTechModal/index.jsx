import Modal from "react-modal";
import { StyledInput, StyledLabel, StyledSelect } from "../../styles/form";
import { LoginButton } from "../../styles/button";
import { ModalContainer, ModalForm, ModalHeader } from "../../styles/modal";
import { ModalClose, ModalTitle } from "../../styles/typography";

export const AddTechModal = ({
	isOpen,
	onClose,
	onSubmit,
	formData,
	onChange,
}) => {

	return (
		<ModalContainer
			isOpen={isOpen}
			onRequestClose={onClose}
		>
			<ModalHeader>
				<ModalTitle>Cadastrar Tecnologia</ModalTitle>
				<ModalClose onClick={onClose}>X</ModalClose>
			</ModalHeader>
			<ModalForm onSubmit={onSubmit}>
				<div>
					<StyledLabel>Nome</StyledLabel>
					<StyledInput
						type="text"
						id="title"
						name="title"
						value={formData.title}
						onChange={onChange}
					/>
				</div>
				<div>
					<StyledLabel>Selecionar Status</StyledLabel>
					<StyledSelect
						id="status"
						name="status"
						value={formData.status}
						onChange={onChange}
					>
						<option value="">Selecione o status</option>
						<option value="Iniciante">Iniciante</option>
						<option value="Intermediário">Intermediário</option>
						<option value="Avançado">Avançado</option>
					</StyledSelect>
				</div>
				<LoginButton type="submit">Cadastrar Tecnologia</LoginButton>
			</ModalForm>
		</ModalContainer>
	);
};
