import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";

const id = "S1234567D";
const name = ProfileArchetype.MR_SG_UNCLE_GST_SCENARIO_2A3;

export const mrGstvUncle2a3: FakeProfile = {
	id,
	name,
	// tslint:disable-next-line: no-big-function
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.gstvoucher.exclusion.value = false;
		profile.gstvoucher.signup.value = false;
		profile.gstvoucher.gstregular.value = 100;
		profile.gstvoucher.gstmedisave.value = 200;
		profile.gstvoucher.gstspecial.value = undefined;

		return profile;
	},
};
