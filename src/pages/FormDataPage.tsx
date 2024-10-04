import React, { useEffect } from 'react';
import Header from '../layout/Header';
import FormDataTable from '../components/FormDataTable';
import { SimpleFooter } from '../layout/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFormData } from '../store/formSlice';
import { AppDispatch, RootState } from '../store';

const FormDataPage: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { formData, status, errorMessage } = useSelector((state: RootState) => state.form);

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchFormData());
		}
	}, [dispatch, status]);

	return (
		<div className="min-h-screen bg-[#F4F7FA] relative">
			<Header bgColor="bg-[#F4F7FA]" />
			<section className="container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-24">
				<div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
					<div className="px-6 py-8">
						<h1 className="text-3xl font-bold mb-6 text-gray-800">Data Table for Form</h1>
						{status === 'loading' && <p>Loading...</p>}
						{status === 'error' && <p className="text-red-500">{errorMessage}</p>}
						{status === 'success' && <FormDataTable data={formData} />}
					</div>
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

export default FormDataPage;
