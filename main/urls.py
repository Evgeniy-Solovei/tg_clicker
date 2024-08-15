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

]
