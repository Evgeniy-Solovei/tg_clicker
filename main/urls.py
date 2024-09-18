from .views import *
from django.urls import path, include

app_name = "main"

urlpatterns = [
    path('main_info/<int:tg_id>/<str:name>/', Main_info.as_view(), name='main_info'),
    path('tap_tap/', Tap_Tap.as_view(), name='tap-tap'),
    path('autobot/', Autobot.as_view(), name='tap-tap'),
    path('takin_bonus_autobot/', Take_Bonus_Autobot.as_view()),
    path('info_upgrade/<int:tg_id>/', Info_Upgrade.as_view(), name='info_upgrade'),
    path('UpgradeEnergy/', UpgradeEnergy.as_view(), name='UpgradeEnergy'),
    path('UpgradeDamage/', UpgradeDamage.as_view(), name='UpgradeDamage'),
    path('get_all_box/<int:tg_id>/', Get_All_Box.as_view(), name='get_all_box'),
    path('open_box/', Open_Box.as_view(), name='open_box'),
    path('take_and_apply_bonus/', Take_And_Apply_Bonus.as_view()),
    path('completeReferral/<int:new_id>/<int:referral_id>/', CompleteReferralSystem.as_view()),
    path('all_friends/<int:tg_id>/', AllFriends.as_view(), name='all_friends'),
    path('taking_referral_bonus/', TakinReferralBonus.as_view(), name='takin_bonus'),
    path('generate_link/<int:tg_id>/', GenerateRefLinkView.as_view(), name='generate_link'),
    path('all_leagues/<int:tg_id>/', LeagueDetailView.as_view(), name='league-detail-id'),
    path('all_leagues/<str:name>/', LeagueDetailView.as_view(), name='league-detail-name'),
    path('all_leagues/', LeagueDetailView.as_view(), name='all-league-detail'),
    path('all_skins_player/<int:tg_id>/', SkinsList.as_view(), name='skin-list'),
    path('activate-skin/', ActivateSkinView.as_view(), name='activate_skin'),
    path('tasks/<int:tg_id>/', TaskPlayerDetailView.as_view(), name='task-player-list'),
    path('task/<int:tg_id>/<str:description>/', TaskPlayerDetailView.as_view(), name='task-player-detail'),
    path('task/<int:tg_id>/<str:description>/start/', StartTaskView.as_view(), name='task-player-start'),
    path('task_tg/', CheckSubscriptionView.as_view(), name='task-player-tg'),
    path('instruction/<int:tg_id>/', InstructionUserView.as_view(), name='instruction-off'),
]
