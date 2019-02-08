package com.stackroute.maverick.Controller;

//import org.apache.kafka.clients.producer.KafkaProducer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//import com.stackroute.gameengine.domain.GameData;
import com.stackroute.maverick.Services.GameReportingServiceI;
import com.stackroute.maverick.domain.AdaptiveResult;
import com.stackroute.maverick.Services.KafkaProducerService;
import com.stackroute.maverick.domain.GameReports;
import com.stackroute.maverick.domain.ReportingData;

//import io.micrometer.core.annotation.Timed;

@RequestMapping("/api/v1")
@RestController
@SuppressWarnings("rawtypes")
@CrossOrigin(value="*")
public class GameReportingServiceController {

	@Autowired
	GameReportingServiceI gamereportingservice;
	
	@Autowired
	KafkaProducerService producer;
	
	//CrossOrigins apply here
	/*@Timed(value = "quiz.game-reporting.PostReportRequest", histogram = true, percentiles = { 0.95 }, extraTags = {
            "version", "1.0" })*/
	@RequestMapping(value="/store",method=RequestMethod.POST)
	public ResponseEntity<GameReports> addGameReports(@RequestBody GameReports gamereports) /*throws DataBaseNotAvailableException*/
	{
		GameReports newgamereports= gamereportingservice.addgamereports(gamereports);
		return new ResponseEntity<GameReports>(newgamereports,HttpStatus.OK);
	}
	
	/*@Timed(value = "quiz.game-reporting.GetAllRequest", histogram = true, percentiles = { 0.95 }, extraTags = {
            "version", "1.0" })*/
	@CrossOrigin("http://localhost:4200")
	@RequestMapping(value="/getAll",method=RequestMethod.GET)
	public ResponseEntity showAllGameReports()
	{
		
		return new ResponseEntity<>(gamereportingservice.getAllGameReports(),HttpStatus.OK);
	}
	
	@CrossOrigin("*")
	@RequestMapping(value="/getAllSingleReports",method=RequestMethod.GET)
	public ResponseEntity showAllGameReports1()
	{
		return new ResponseEntity<>(gamereportingservice.getAllGameReports1(),HttpStatus.OK);
	}
	
	
	@RequestMapping(value="/getAllSingleReportsById/{userId}")
	public ResponseEntity findSingleUserById(@PathVariable(value="userId")int userId)
	{
		System.out.println(userId);
		return new ResponseEntity<>(gamereportingservice.findSingleUserById(userId),HttpStatus.OK);
	}
	/*@RequestMapping(value="/getAll/{gameid}",method=RequestMethod.GET)
	public ResponseEntity showGameById(@PathVariable(value="gameid") String gameid)
	{
		int uid = Integer.parseInt(gameid);
		GameReports gg = gamereportingservice.showGameById(uid);
		producer.send(gg);
		
		System.out.print(gameid);
		return new ResponseEntity<>(gamereportingservice.findByGameId(Integer.parseInt(gameid)),HttpStatus.OK);
	}*/
	
	/*@Timed(value = "quiz.game-reporting.GetGameIDRequest", histogram = true, percentiles = { 0.95 }, extraTags = {
            "version", "1.0" })*/
	@CrossOrigin("*")
	@RequestMapping(value="/getById/{gameid}",method=RequestMethod.GET)
	public ResponseEntity findGameById(@PathVariable(value="gameid") int gameid)
	{
		/*int uid = Integer.parseInt(gameid);
		GameReports gg = gamereportingservice.showGameById(uid);
		producer.send(gg);*/
		
		System.out.print(gameid);
		return new ResponseEntity<>(gamereportingservice.findGamebyId(gameid),HttpStatus.OK);
	}
	
	/*@Timed(value = "quiz.game-reporting.GetGameNameRequest", histogram = true, percentiles = { 0.95 }, extraTags = {
            "version", "1.0" })*/
	@RequestMapping(value="/getAll/{gamename}",method=RequestMethod.GET)
	public ResponseEntity<GameReports> showGameByName(@PathVariable(value="gamename")String gamename)
	{
		System.out.println("Controller"+gamename);
		System.out.println("Controller"+gamereportingservice.showGameByName(gamename));
		return new ResponseEntity<GameReports>(gamereportingservice.showGameByName(gamename),HttpStatus.OK);
		
	}
	/*
	 * Multiplayer
	 */
	@RequestMapping(value="/Multi",method=RequestMethod.POST)
	public ResponseEntity<ReportingData> addMultiGameReports(@RequestBody ReportingData multiplayerresult)
	{
		ReportingData newmultiplayerresult=gamereportingservice.addmultigamereports(multiplayerresult);
		System.out.println("Executing in multiplayerreports");
		return new ResponseEntity<ReportingData>(newmultiplayerresult,HttpStatus.OK);
	}
	
	@CrossOrigin("*")
	@RequestMapping(value="/Multi",method=RequestMethod.GET)
	public ResponseEntity showAllMultiReports()
	{
		Iterable<ReportingData> reportingdata =gamereportingservice.getAllMultiGameReports();
		return new ResponseEntity<Iterable<ReportingData>>(reportingdata, HttpStatus.OK);
		//return new ResponseEntity<>(,HttpStatus.OK);
	}
	
	@RequestMapping(value="/getMultiByUserId/{_id}",method=RequestMethod.GET)
	public ResponseEntity findMultiUserById(@PathVariable(value="_id")int _id)
	{
		System.out.println(_id);
		return new ResponseEntity<>(gamereportingservice.findMultiUserById(_id),HttpStatus.OK);
		
	}
	
	
	@RequestMapping(value="/Adapt",method=RequestMethod.POST)
	public ResponseEntity <AdaptiveResult> addAdaptiveReports(@RequestBody AdaptiveResult adaptiveresult)
	{
		AdaptiveResult newadaptiveresult=gamereportingservice.addadaptivereports(adaptiveresult);
		return new ResponseEntity<AdaptiveResult>(newadaptiveresult,HttpStatus.OK);

	}
	
	@RequestMapping(value="/Adapt",method=RequestMethod.GET)
	public ResponseEntity ShowAllAdaptiveReports()
	{
		Iterable<AdaptiveResult> adaptivereports=gamereportingservice.getAllAdaptiveGameReports();
		return new ResponseEntity<Iterable<AdaptiveResult>>(adaptivereports,HttpStatus.OK);
	}
	
	@RequestMapping(value="/getAdaptUserById/{{userId}}",method=RequestMethod.GET)
	public ResponseEntity findAdaptUserById(@PathVariable(value="userId") int userId)
	{
		System.out.println(userId);
		return new ResponseEntity<>(gamereportingservice.findAdaptUserById(userId),HttpStatus.OK);
	}
}
