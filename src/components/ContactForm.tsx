import React, { useState } from "react";

interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
	};

	return (
		<div className="w-full md:w-3/5 bg-[#F4F7FA] px-16 py-10">
			<h1 className="text-5xl font-medium mb-12">Let's build something cool together</h1>
			<form onSubmit={handleSubmit} className="space-y-6">
				{["name", "email", "subject"].map((field) => (
					<div key={field}>
						<label htmlFor={field} className="block mb-2 capitalize font-medium text-sm">
							{field}
						</label>
						<input
							type={field === "email" ? "email" : "text"}
							id={field}
							name={field}
							value={formData[field as keyof FormData]}
							onChange={handleChange}
							placeholder={
								field === "name" ? "James Robert" : field === "email" ? "ayush.barnwal@brightscout.com" : "For web design work Enquire"
							}
							className="w-full text-xl p-2 border-b-2 border-gray-500 bg-[#F4F7FA] focus:border-black outline-none transition-all duration-300"
							required
						/>
					</div>
				))}
				<div>
					<label htmlFor="message" className="block mb-2 font-medium">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						placeholder="Type your Message"
						className="w-full p-2 text-xl border-b-2 border-gray-500 bg-[#F4F7FA] focus:border-black outline-none transition-all duration-300 h-32 resize-none"
						required
					></textarea>
				</div>
				<button type="submit" className="bg-black text-white text-sm px-16 py-5 rounded-full hover:bg-gray-800 transition-all duration-300">
					Submit
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
