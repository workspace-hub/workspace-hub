package workspacehub;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
<<<<<<< HEAD
<<<<<<< HEAD
=======
import org.springframework.web.bind.annotation.RequestParam;
>>>>>>> 9ce00afb789d58b76ed34e732cd251568b8406b8
=======
import org.springframework.web.bind.annotation.RequestParam;
>>>>>>> upstream/master

@Controller
public class WorkSpaceController {

	@Resource
	CapacityRepository capacityRepo;

	@Resource
	CostRepository costRepo;

	@Resource
	FeatureRepository featureRepo;

	@Resource
	HoursRepository hoursRepo;

	@Resource
	ParkingRepository parkingRepo;

	@Resource
	SpaceTypeRepository spaceTypeRepo;

	@Resource
	WorkSpaceHubRepository workspaceHubRepo;

	@RequestMapping("/")
	public String showAllClasses(Model model) {
<<<<<<< HEAD
<<<<<<< HEAD
		model.addAttribute("spaceTypes", spaceTypeRepo.findAll());
=======
		model.addAttribute("spaceType", spaceTypeRepo.findAll());
>>>>>>> 9ce00afb789d58b76ed34e732cd251568b8406b8
=======
		model.addAttribute("spaceType", spaceTypeRepo.findAll());
>>>>>>> upstream/master
		model.addAttribute("workspaceHubs", workspaceHubRepo.findAll());
		model.addAttribute("parking", parkingRepo.findAll());
		model.addAttribute("hours", hoursRepo.findAll());
		model.addAttribute("features", featureRepo.findAll());
		model.addAttribute("cost", costRepo.findAll());
		model.addAttribute("capacity", capacityRepo.findAll());
		return "splashPage";
	}
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======

	@RequestMapping("/space_type")
	public String getOneSpaceType(@RequestParam Long id, Model model) {
		model.addAttribute("spacetype", spaceTypeRepo.findOne(id));
		return "spacetype";
	}
>>>>>>> upstream/master

	@RequestMapping("/spaceTypes")
	public String showAllSpaceTypes(Model model) {
		model.addAttribute("spaceTypes", spaceTypeRepo.findAll());
		return "spaceTypes";
	}
<<<<<<< HEAD
	
	@RequestMapping("/spaceType")
	public String getOneSpaceType(@RequestParam Long id, Model model) {
		model.addAttribute("spaceType", spaceTypeRepo.findOne(id));
		return "spaceType";
	}
	
>>>>>>> 9ce00afb789d58b76ed34e732cd251568b8406b8
=======

>>>>>>> upstream/master
}
