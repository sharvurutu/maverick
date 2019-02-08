package com.stackroute.maverick.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.maverick.Repository.AdaptiveUserRepo;
import com.stackroute.maverick.Repository.GameReportingRepoI;
import com.stackroute.maverick.Repository.MultiUserActivityRepo;
import com.stackroute.maverick.Repository.UserActivityRepo;
import com.stackroute.maverick.domain.AdaptiveResult;
import com.stackroute.maverick.domain.GameReports;
import com.stackroute.maverick.domain.ReportingData;
import com.stackroute.maverick.domain.SinglePlayerResult;
import com.stackroute.maverick.domain.UserActivity;

@Service
public class GameReportingService implements GameReportingServiceI{
	
	GameReportingRepoI gamereportingrepo;
	UserActivityRepo gamereportrepo;
	MultiUserActivityRepo multigamereportrepo;
	AdaptiveUserRepo adaptiveuserrepo;
	
	@Autowired
	public GameReportingService(GameReportingRepoI gamereportingrepo,UserActivityRepo gamereportrepo,MultiUserActivityRepo multigamereportrepo, AdaptiveUserRepo adaptiveuserrepo)
	{
		super();
		this.gamereportingrepo=gamereportingrepo;
		this.gamereportrepo=gamereportrepo;
		this.multigamereportrepo=multigamereportrepo;
		this.adaptiveuserrepo=adaptiveuserrepo;
	}

	@Override
	public GameReports addgamereports(GameReports gamereports) {
		try 
		{
			gamereportingrepo.save(gamereports);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return gamereports;
	}
	
	@Override
	public Iterable<GameReports> getAllGameReports()
	{
		Iterable <GameReports> gamereportlist=gamereportingrepo.findAll();
		return gamereportlist;	
	}
	
	@Override
	public GameReports findGamebyId(int gameId)
	{
		System.out.println("in service :"+gamereportingrepo.existsById(gameId));
		GameReports gamereportfound=gamereportingrepo.findById(gameId).orElse(null);
		System.out.println("GameId:"+gameId);
		System.out.println("GameReportFound:"+gamereportfound);
		return gamereportfound;
	}

	@Override
	public GameReports showGameByName(String gameName) {
		System.out.println("Name Service:"+gameName);
		System.out.println("In Name Service:"+gamereportingrepo.findBygamename(gameName));
		GameReports gamereportfound=gamereportingrepo.findBygamename(gameName);
		return gamereportfound;
		
	}

	@Override
	public Iterable<UserActivity> getAllGameReports1() {
		Iterable<UserActivity> gamereportlist=gamereportrepo.findAll();
//		System.out.println("Gamereportlist:"+gamereportlist.iterator().next().getPlayedData().get(1).getAnswer());
		return gamereportlist;
	}

	
	//Multiplayer Services 
	
	@Override
	public ReportingData addmultigamereports(ReportingData multiplayerresult) {
		try
		{
			multigamereportrepo.save(multiplayerresult);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		
		return multiplayerresult;
	}

	@Override
	public Iterable<ReportingData> getAllMultiGameReports() {
		Iterable <ReportingData> multigamereportlist=multigamereportrepo.findAll();
		return multigamereportlist;
	}

	@Override
	public Iterable<AdaptiveResult> getAllAdaptiveGameReports() {
		Iterable<AdaptiveResult> adaptiveuserrepolist=adaptiveuserrepo.findAll();
		return adaptiveuserrepolist;
	}
	
	@Override
	public AdaptiveResult addadaptivereports(AdaptiveResult adaptiveresult)
	{
		try
		{
			adaptiveuserrepo.save(adaptiveresult);
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
		return adaptiveresult;
	}

	/*@Override
	public AdaptiveResult showAdaptbyUserId(int userId) {
		System.out.println("in service :"+adaptiveuserrepo.existsById(userId));
		AdaptiveResult gamereportfound=adaptiveuserrepo.findById(userId).orElse(null);
		System.out.println("GameId:"+userId);
		System.out.println("GameReportFound:"+gamereportfound);
		return gamereportfound;
	}
*/
	/*@Override
	public MultiPlayerResult showMultiByUserId(int userId)
	{
		System.out.println("in service :"+multigamereportrepo.existsById(userId));
		MultiPlayerResult gamereportfound=multigamereportrepo.findById(userId).orElse(null);
		System.out.println("GameId:"+userId);
		System.out.println("GameReportFound:"+gamereportfound);
		return gamereportfound;
	}*/
/*	@Override
	public GameReports findByGameId(int gameId) {
		// TODO Auto-generated method stub
		GameReports gamereportfound=gamereportingrepo.findByGameId(gameId);
		System.out.println("GameId:"+gameId);
		System.out.println("GameReportFound:"+gamereportfound);
		return gamereportfound;
	}*/

	@Override
	public UserActivity findSingleUserById(int userId) {
		System.out.println("in service :"+gamereportingrepo.existsById(userId));
		UserActivity gamereportfound=gamereportrepo.findById(userId).orElse(null);
		System.out.println("GameId:"+userId);
		System.out.println("GameReportFound:"+gamereportfound);
		return gamereportfound;
	}

	@Override
	public ReportingData findMultiUserById(int gameid) {
		System.out.println("in service :"+multigamereportrepo.existsById(gameid));
		ReportingData gamereportfound=multigamereportrepo.findById(gameid).orElse(null);
		System.out.println("GameId:"+gameid);
		System.out.println("GameReportFound:"+gamereportfound);
		return gamereportfound;
	}

	@Override
	public AdaptiveResult findAdaptUserById(int _id) {
		System.out.println("in service :"+adaptiveuserrepo.existsById(_id));
		AdaptiveResult gamereportfound=adaptiveuserrepo.findById(_id).orElse(null);
		System.out.println("GameId:"+_id);
		System.out.println("GameReportFound:"+gamereportfound);
		return gamereportfound;
	}
	
	
	

}
