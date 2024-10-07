import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { submitFormData } from '../store/formSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			subject: '',
			message: '',
		},
		validationSchema: Yup.object({
			name: Yup.string().required('Required'),
			email: Yup.string().email('Invalid email address').required('Required'),
			subject: Yup.string().required('Required'),
			message: Yup.string().required('Required'),
		}),
		onSubmit: async (values, { setSubmitting }) => {
			try {
				await dispatch(submitFormData(values)).unwrap();
				console.log('Form submitted successfully');
			} catch (error) {
				console.error('Failed to submit form:', error);
			} finally {
				setSubmitting(false);
			}
		},
	});
	
	return (
		<div className="w-full md:w-3/5 bg-[#F4F7FA] px-16 py-10">
			<h1 className="text-5xl font-medium mb-12">Let's build something cool together</h1>
			<form onSubmit={formik.handleSubmit} className="space-y-6">
				{['name', 'email', 'subject'].map((field) => (
					<div key={field}>
						<label htmlFor={field} className="block mb-2 capitalize font-medium text-sm">
							{field}
						</label>
						<input
							type={field === 'email' ? 'email' : 'text'}
							id={field}
							name={field}
							value={formik.values[field as keyof typeof formik.values]}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder={field === 'name' ? 'James Robert' : field === 'email' ? 'ayush.barnwal@brightscout.com' : 'For web design work Enquire'}
							className="w-full text-xl p-2 border-b-2 border-gray-500 bg-[#F4F7FA] focus:border-black outline-none transition-all duration-300"
							required
						/>
						{formik.touched[field as keyof typeof formik.touched] && formik.errors[field as keyof typeof formik.errors] ? (
							<div className="text-red-500 text-sm">{formik.errors[field as keyof typeof formik.errors]}</div>
						) : null}
					</div>
				))}
				<div>
					<label htmlFor="message" className="block mb-2 font-medium">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						value={formik.values.message}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						placeholder="Type your Message"
						className="w-full p-2 text-xl border-b-2 border-gray-500 bg-[#F4F7FA] focus:border-black outline-none transition-all duration-300 h-32 resize-none"
						required
					></textarea>
					{formik.touched.message && formik.errors.message ? <div className="text-red-500 text-sm">{formik.errors.message}</div> : null}
				</div>
				<button
					type="submit"
					className="bg-black text-white text-sm px-16 py-5 rounded-full hover:bg-gray-800 transition-all duration-300"
					disabled={formik.isSubmitting}
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
