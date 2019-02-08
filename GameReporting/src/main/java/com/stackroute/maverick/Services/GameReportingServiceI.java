package com.stackroute.maverick.Services;

import com.stackroute.maverick.domain.AdaptiveResult;
import com.stackroute.maverick.domain.GameReports;
import com.stackroute.maverick.domain.ReportingData;
import com.stackroute.maverick.domain.SinglePlayerResult;
import com.stackroute.maverick.domain.UserActivity;

public interface GameReportingServiceI 
{	
	public GameReports addgamereports(GameReports gamereports);
	public Iterable<GameReports> getAllGameReports();
	public GameReports findGamebyId(int gameId);
	public GameReports showGameByName(String gameName);
	public Iterable<UserActivity> getAllGameReports1();
	public ReportingData addmultigamereports(ReportingData multiplayerresult);
	public Iterable<ReportingData> getAllMultiGameReports();
	public AdaptiveResult addadaptivereports(AdaptiveResult adaptiveresult);
	public Iterable<AdaptiveResult> getAllAdaptiveGameReports();
	//public AdaptiveResult showAdaptbyUserId(int userId);
	//public MultiPlayerResult showMultiByUserId(int userId);
	public UserActivity findSingleUserById(int userId);
	public ReportingData findMultiUserById(int _id);
	public AdaptiveResult findAdaptUserById(int gameid);
} 
