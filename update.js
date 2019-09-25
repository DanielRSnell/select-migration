const WPAPI = require("wpapi");
const axios = require("axios");

var wp = new WPAPI({
	endpoint: "http://192.249.121.250/~seldev/wp-json",
	username: `${process.env.USERNAME}`,
	password: `${process.env.PASSWORD}`
});

async function UpdateProperties() {
	await wp.posts().categories(6).perPage(100).page(1).then((data) => {
		data.forEach((item, index) => {
			let update = {
				arch_url: item.acf["ach_automatic_debit_from_checking"].url || null,
				architectural_url: item.acf["architectural_change_application"].url || null,
				complaint_procedure_url: item.acf["complaint_procedure_and_process"].url || null,
				complaint_url: item.acf["complaint_form"].url || null,
				owner_url: item.acf["owner_information"].url || null,
				tenant_url: item.acf["tenant_information_form"].url || null,
				vehicle_url: item.acf["vehicle_information_form"].url || null,
				pet_url: item.acf["pet_information_form"].url || null,
				asc_url: item.acf["asc_application_form"].url || null,
				office_number: item.acf["office_number"].url || null,
				app_url: item.acf["application_form"].url || null,
				policy_url: item.acf["policy_cost_form"].url || null,
				pool_url: item.acf["pool_rules"].url || null,
				policy_record_url: item["policy_record"].url || null,
				rules_url: item["rules_&_regulations"].url || null,
				parking_url: item.acf["parking_rules"].url || null,
				homeowner_url: item.acf["homeowner_permit_guide_form"].url || null,
				policy_reso_url: item.acf["policy_resolution"].url || null,
				boat_url: item.acf["boat_slip_form"].url || null
			};

			console.log(update);
			// wp
			// 	.posts()
			// 	.id(item.id)
			// 	.update(item)
			// 	.then((x) => console.log(`${item.id} updated`))
			// 	.catch((e) => console.log(e));
		});
	});
}

UpdateProperties();
