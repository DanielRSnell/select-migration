const WPAPI = require("wpapi");
const axios = require("axios");
const args = require("minimist")(process.argv.slice(2));
require("dotenv").config();

// "ach_automatic_debit_from_checking"
// "architectural_change_application"
//  "complaint_procedure_and_process"
// "complaint_form"
// "owner_information"
// "tenant_information_form"
// "vehicle_information_form"
// "pet_information_form"
// "asc_application_form"
// "application_form"
// "policy_cost_form"
//  "pool_rules"
// "policy_record",
// "rules_&_regulations",
//  "parking_rules"
//  "homeowner_permit_guide_form"
//  "policy_resolution"
// "boat_slip_form"

const apiPromise = WPAPI.discover(`${process.env.ENDPOINT}`).then(function(site) {
	return site.auth({
		username: `${process.env.USER}`,
		password: `${process.env.PASS}`
	});
});

async function UpdateWordpress(site, id, arr) {
	await site
		.community()
		.id(id)
		.update({ fields: { managers_email: "", community_forms: arr } })
		.then((response) => console.log(response.id))
		.catch((e) => console.log("Error"));
}

apiPromise.then(function(site) {
	console.log("start");
	site.community().perPage(20).page(parseInt(args["_"])).then((data) => {
		data.forEach((item, index) => {
			const arr = [];

			if (item.acf["ach_automatic_debit_from_checking"] !== false) {
				arr.push({
					form_name: "ACH Automatic Debit",
					form_file: item.acf["ach_automatic_debit_from_checking"]
				});
			}
			if (item.acf["architectural_change_application"] !== false) {
				arr.push({
					form_name: "Architectural Change Application",
					form_file: item.acf["architectural_change_application"]
				});
			}
			if (item.acf["complaint_procedure_and_process"] !== false) {
				arr.push({
					form_name: "Complaint Procedure and Process",
					form_file: item.acf["complaint_procedure_and_process"]
				});
			}
			if (item.acf["complaint_form"] !== false) {
				arr.push({
					form_name: "Comaplint Form",
					form_file: item.acf["complaint_form"]
				});
			}
			if (item.acf["owner_information"] !== false) {
				arr.push({
					form_name: "Owner Information",
					form_file: item.acf["owner_information"]
				});
			}
			if (item.acf["tenant_information_form"] !== false) {
				arr.push({
					form_name: "Tenant Information Form",
					form_file: item.acf["tenant_information_form"]
				});
			}
			if (item.acf["vehicle_information_form"] !== false) {
				arr.push({
					form_name: "Vehicle Information Form",
					form_file: item.acf["vehicle_information_form"]
				});
			}
			if (item.acf["pet_information_form"] !== false) {
				arr.push({
					form_name: "Pet Information Form",
					form_file: item.acf["pet_information_form"]
				});
			}
			if (item.acf["asc_application_form"] !== false) {
				arr.push({
					form_name: "ASC Application Form",
					form_file: item.acf["asc_application_form"]
				});
			}
			if (item.acf["application_form"] !== false) {
				arr.push({
					form_name: "Application Form",
					form_file: item.acf["application_form"]
				});
			}
			if (item.acf["policy_cost_form"] !== false) {
				arr.push({
					form_name: "Policy Cost Form",
					form_file: item.acf["policy_cost_form"]
				});
			}

			if (item.acf["policy_record"] !== false) {
				arr.push({
					form_name: "Policy Record",
					form_file: item.acf["policy_record"]
				});
			}

			if (item.acf["homeowner_permit_guide_form"] !== false) {
				arr.push({
					form_name: "Homeowner Permit Guide Form",
					form_file: item.acf["homeowner_permit_guide_form"]
				});
			}
			if (item.acf["policy_resolution"] !== false) {
				arr.push({
					form_name: "Policy Resolution",
					form_file: item.acf["policy_resolution"]
				});
			}
			if (item.acf["boat_slip_form"] !== false) {
				arr.push({
					form_name: "Boat Slip Form",
					form_file: item.acf["boat_slip_form"]
				});
			}

			const reset = [];
			UpdateWordpress(site, item.id, arr);
		});
	});
});
