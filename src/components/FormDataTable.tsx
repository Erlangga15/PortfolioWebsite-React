import React from 'react';

interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

interface FormDataTableProps {
	data: FormData[];
}

const FormDataTable: React.FC<FormDataTableProps> = ({ data }) => {
	return (
		<div className="w-full overflow-x-auto bg-white shadow-lg rounded-lg">
			<table className="w-full table-auto">
				<thead>
					<tr className="bg-gray-100">
						<th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
						<th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
						<th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Subject</th>
						<th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Message</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.email}</td>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.subject}</td>
							<td className="px-6 py-4 text-sm text-gray-900">{item.message}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default FormDataTable;
