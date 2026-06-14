
import CompanyTable from "@/Components/DashBoardComponents/CompanyTable/CompanyTable";
import { UpdatedCompanyStatus } from "@/lib/action/company";
import { getCompanisAll } from "@/lib/api/companis";


const AdminCompaniespage = async () => {
    const companies = await getCompanisAll();

    




    return (
        <div className="p-6">
            <CompanyTable  companies={companies}></CompanyTable>
        </div>
    );
};

export default AdminCompaniespage;