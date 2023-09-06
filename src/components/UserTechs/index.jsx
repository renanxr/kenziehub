import {
	UserTechHeader,
	UserTechsContainer,
	UserTechsList,
	UserTechsOptions,
} from "../../styles/grid";
import { ListText1, ListText2, PagesTitle1 } from "../../styles/typography";
import { useEffect, useState, useContext } from "react";
import { AddButton } from "../../styles/button";
import { AddTechModal } from "../AddTechModal";
import { TechModal } from "../TechModal";
import { TechContext } from "../../providers/TechContext";

export const UserTechs = () => {
	const { techs, loading, error, addTech, updateTechStatus, deleteTech } = useContext(TechContext);
	const [showModal, setShowModal] = useState(false);
	const [selectedTech, setSelectedTech] = useState(null);
	const [showTechModal, setShowTechModal] = useState(false);
	const [formData, setFormData] = useState({
		title: "",
		status: "",
	});

	const handleOpenModal = () => {
		setShowModal(true);
	};
	const handleCloseModal = () => {
		setShowModal(false);
	};
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		try {
			await addTech(formData);
			handleCloseModal();
		} catch (error) {
			console.error("Error adding tech:", error);
		}
	};

	const handleOpenModalTech = (tech) => {
		setSelectedTech(tech);
		setShowTechModal(true);
	};
	const handleTechModalClose = () => {
		setShowTechModal(false);
		setSelectedTech(null);
	};

	const handleStatusChange = async (tech, status) => {
		try {
			await updateTechStatus(tech.id, status);
		} catch (error) {
			console.error("Error updating tech status:", error);
		}
	};

	const handleTechDelete = async (tech) => {
		try {
			await deleteTech(tech.id);
			handleTechModalClose();
		} catch (error) {
			console.error("Error deleting tech:", error);
		}
	};

	return (
		<UserTechsContainer>
			<UserTechHeader>
				<PagesTitle1>Tecnologias</PagesTitle1>
				<AddButton onClick={handleOpenModal}>+</AddButton>
			</UserTechHeader>
			<UserTechsList>
				{techs.map((tech) => (
					<UserTechsOptions
						key={tech.id}
						onClick={() => handleOpenModalTech(tech)}
					>
						<ListText1>{tech.title}</ListText1>
						<ListText2>{tech.status}</ListText2>
					</UserTechsOptions>
				))}
			</UserTechsList>
			{showModal && (
				<AddTechModal
					isOpen={showModal}
					onClose={handleCloseModal}
					onSubmit={handleFormSubmit}
					formData={formData}
					onChange={handleInputChange}
				/>
			)}
			{selectedTech && (
				<TechModal
					isOpen={showTechModal}
					onClose={handleTechModalClose}
					tech={selectedTech}
					onStatusChange={handleStatusChange}
					onDelete={handleTechDelete}
				/>
			)}
		</UserTechsContainer>
	);
};
