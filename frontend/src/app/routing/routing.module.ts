import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ContentComponent } from "../content/content.component";
import { AppComponent } from "../app.component";
import { LandingPageComponent } from "../landing-page/landing-page.component";
import { GameCardComponent } from "../game-card/game-card.component";
import { CarouselCardComponent } from "../carousel-card/carousel-card.component";
import { QuizComponent } from "../quiz/quiz.component";
import { ResultComponent } from "../result/result.component";
import { PlayComponent } from "../play/play.component";
import { RegistrationComponent } from "../registration/registration.component";
import { AllTopicsInCategoryComponent } from "../all-topics-in-category/all-topics-in-category.component";
import { QuestionsComponent } from "../questions/questions.component";
import { QuestionDetailComponent } from "../question-detail/question-detail.component";
import { TopicDialogComponent } from "../topic-dialog/topic-dialog.component";
import { QuestionDialogComponent } from "../question-dialog/question-dialog.component";
import { GameCreateComponent } from "../game-create/game-create.component";
import { QuestionService } from "../services/questionservice.service";
import { RecentGameComponent } from "../recent-game/recent-game.component";
import { QuestionCategoryComponent } from "../question-category/question-category.component";
import { CategorySuggetionsComponent } from "../category-suggetions/category-suggetions.component";
import { AuthGuard } from "../LoginAuth/auth.guard";
import { UserupdateprofileComponent } from "../UserProfile/userupdateprofile/userupdateprofile.component";
import { UserProfileComponent } from "../UserProfile/user-profile/user-profile.component";
import { LoginDialogComponent } from "../login-dialog/login-dialog.component";
import { AdministrationComponent } from "../administration/administration.component";
import { SearchResultComponent } from "../search-result/search-result.component";
import { MultiPlayerGameComponent } from "../multi-player-game/multi-player-game.component";
import { MultiPlayerResultComponent } from "../multi-player-result/multi-player-result.component";
import { AdaptiveResultComponent } from "../adaptive-result/adaptive-result.component";
import { AdaptivePlayBoardComponent } from "../adaptive-play-board/adaptive-play-board.component";
import { AllGamesInsideTopicComponent } from "../all-games-inside-topic/all-games-inside-topic.component";
import { UpdateDeleteGameComponent } from "../update-delete-game/update-delete-game.component";
import { SingleComponent } from "../UserProfile/reporting/single/single.component";
import { MultiComponent } from "../UserProfile/reporting/multi/multi.component";
import { AdaptiveComponent } from "../UserProfile/reporting/adaptive/adaptive.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "maverick" },
  { path: "register", component: RegistrationComponent },
  { path: "question", component: QuestionCategoryComponent },
  { path: "category-details", component: AllTopicsInCategoryComponent },
  { path: "topic-details", component: QuestionsComponent },
  { path: "profile", component: UserProfileComponent },
  { path: "category", component: ContentComponent },
  { path: "create-game", component: GameCreateComponent },
  { path: "home/:userId", component: ContentComponent },
  { path: "content", component: ContentComponent },
  { path: "maverick", component: LandingPageComponent },
  { path: "game-by-categoryId/:id/:userId", component: ContentComponent },
  { path: "play", component: PlayComponent },
  { path: "quiz", component: QuizComponent },
  { path: "result", component: ResultComponent },
  { path: "multiResult", component: MultiPlayerResultComponent },
  { path: "categorySuggetions/:id", component: CategorySuggetionsComponent },
  { path: "question-detail", component: QuestionDetailComponent },
  { path: "add-topic", component: TopicDialogComponent },
  { path: "add-question", component: QuestionDialogComponent },
  { path: "form/:id", component: UserupdateprofileComponent },
  { path: "admin", component: AdministrationComponent },
  { path: "searchresult", component: SearchResultComponent },
  { path: "multiquiz", component: MultiPlayerGameComponent },
  { path: "adaptiveresult", component: AdaptiveResultComponent },
  { path: "adaptivequiz", component: AdaptivePlayBoardComponent },
  { path: "showgame", component: AllGamesInsideTopicComponent },
  { path: "edit", component: UpdateDeleteGameComponent },
  { path: "single/:userId", component: SingleComponent },
  { path: "multi/:userId", component: MultiComponent },
  { path: "adaptive/:userId", component: AdaptiveComponent },

  { path: "**", redirectTo: "maverick" } // please keep this link at the last
  // { path: 'searchresult/:gameName', component: SearchResultComponent}

  // { path: 'search', component: SearchComponent },
  // { path: 'searchresult/:name', component: SearchresultComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule {}

//   { path: '', pathMatch: 'full', redirectTo: 'maverick' },
//   { path: 'register', component: RegistrationComponent },
//   { path: 'question', component: QuestionCategoryComponent, canActivate: [AuthGuard] },
//   { path: 'category-details', component: AllTopicsInCategoryComponent, canActivate: [AuthGuard] },
//   { path: 'topic-details', component: QuestionsComponent, canActivate: [AuthGuard] },
//   { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
//   { path: 'category', component: ContentComponent, canActivate: [AuthGuard] },
//   { path: 'create-game', component: GameCreateComponent, canActivate: [AuthGuard]},
//   {
//     component: ContentComponent, canActivate: [AuthGuard],
//     path: 'home'
//   },
//   {
//     component: ContentComponent, canActivate: [AuthGuard],
//     path: 'content'
//   },
//   {
//     component: LandingPageComponent,
//     path: 'maverick'
//   },
//   {
//     path: 'game-by-categoryId/:id',
//     component: ContentComponent, canActivate: [AuthGuard]
//   },
//   { path: 'play', component: PlayComponent, canActivate: [AuthGuard] },
//   { path: 'quiz', component: QuizComponent, canActivate: [AuthGuard] },
//   { path: 'result', component: ResultComponent, canActivate: [AuthGuard] },
//   { path: 'categorySuggetions', component: CategorySuggetionsComponent },

//   { path: 'question-detail', component: QuestionDetailComponent, canActivate: [AuthGuard] },
//   { path: 'add-topic', component: TopicDialogComponent, canActivate: [AuthGuard]},
//   { path: 'add-question', component: QuestionDialogComponent, canActivate: [AuthGuard]},
//   { path: 'form/:id', component: UserupdateprofileComponent,canActivate: [AuthGuard] },
//   // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
//   //{ path: 'login', component: LoginComponent },
//   { path: '**', redirectTo: 'maverick' }
// ];

// @NgModule({
//   imports: [
//     CommonModule,
//     RouterModule.forRoot(routes)
//   ],
//   declarations: [],
//   exports: [RouterModule]

// })
// export class RoutingModule { }
