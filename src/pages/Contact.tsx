import React from "react";
import Header from "../layout/Header";
import ContactForm from "../components/ContactForm";
import ProfileInfo from "../components/ProfileInfo";
import { SimpleFooter } from "../layout/Footer";

const Contact: React.FC = () => {
	return (
		<div className="min-h-screen bg-[#F4F7FA] relative">
			<Header bgColor="bg-[#F4F7FA]" />
			<section className="container mx-auto pt-32 pb-16 md:pt-40 md:pb-24">
				<div className="flex flex-col md:flex-row gap-20">
					<ProfileInfo />
					<ContactForm />
				</div>
			</section>
			<footer className="bg-black text-white py-20 px-4 md:px-8 lg:px-16">
				<div className="container mx-auto">
					<SimpleFooter />
				</div>
			</footer>
		</div>
	);
};

export default Contact;
