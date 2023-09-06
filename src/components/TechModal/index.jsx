import Modal from "react-modal";
import { StyledLabel, StyledSelect } from "../../styles/form";
import {
	DeleteButton,
	ModalButtonsContainer,
	ModalContainer,
	ModalForm,
	ModalHeader,
	SaveButton,
	StyledInputModal,
} from "../../styles/modal";
import { ModalClose, ModalTitle } from "../../styles/typography";
import { useState } from "react";

export const TechModal = ({
	isOpen,
	onClose,
	tech,
	onStatusChange,
	onDelete,
}) => {
	const [selectedStatus, setSelectedStatus] = useState(tech.status);

	const handleStatusChange = (e) => {
		setSelectedStatus(e.target.value);
	};

	const handleDelete = () => {
		onDelete(tech);
	};

	const handleTechFormSubmit = async (e) => {
		e.preventDefault();

		try {
			await onStatusChange(tech, selectedStatus);
			onClose();
		} catch (error) {
			console.error("Erro ao atualizar tecnologia:", error);
		}
	};

	return (
		<ModalContainer isOpen={isOpen} onRequestClose={onClose}>
			<ModalHeader>
				<ModalTitle>Tecnologia detalhes</ModalTitle>
				<ModalClose onClick={onClose}>X</ModalClose>
			</ModalHeader>
			<ModalForm onSubmit={handleTechFormSubmit}>
				<div>
					<StyledLabel>Nome</StyledLabel>
					<StyledInputModal>{tech.title}</StyledInputModal>
				</div>
				<div>
					<StyledLabel>Status</StyledLabel>
					<StyledSelect value={selectedStatus} onChange={handleStatusChange}>
						<option value="Iniciante">Iniciante</option>
						<option value="Intermediário">Intermediário</option>
						<option value="Avançado">Avançado</option>
					</StyledSelect>
				</div>
				<ModalButtonsContainer>
					<SaveButton type="submit">Salvar Alterações</SaveButton>
					<DeleteButton onClick={handleDelete}>Excluir</DeleteButton>
				</ModalButtonsContainer>
			</ModalForm>
		</ModalContainer>
	);
};
