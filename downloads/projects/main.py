import tweepy
import datetime
import pymysql.cursors

# Twitter API stuff
CONSUMER_KEY = 'dZngf5RKwy7T77UKM0U6PCLBc'
CONSUMER_SECRET = 'X9gaP4gWQ8SsXJntyCTDX8xLTzgiIjkHjGuDvS7dMtr2Xd1TKG'
ACCESS_TOKEN_KEY = '1118143230757998593-Jq6hXrMVzmp1Zj9ira5QNlHzztxAZz'
ACCESS_TOKEN_SECRET = 'zSECqCVdZFpztxCOaBUlYuKuD4gs2NbwXyYs6xFW6n4kc'

auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_TOKEN_KEY, ACCESS_TOKEN_SECRET)
api = tweepy.API(auth)

# MySQL and MariaDB stuff
connection = pymysql.connect(
	host='localhost',
	user='root',
	password='Eggplant123',
	db='beancountsdb',
	charset='utf8mb4',
	cursorclass=pymysql.cursors.DictCursor
	)

beanCounter = 0
startDate = datetime.date.today()

try:
	class MyStreamListener(tweepy.StreamListener):
		def on_status(self, status):
			if datetime.date.today() != startDate:
				newStatus = '"Beans" was tweeted',str(beanCounter),'times on',str(startDate),'.'
				api.update_status(newStatus)
				try:
					with connection.cursor() as cursor:
						sql = 'INSERT INTO `counts` (`date`, `count`) VALUES (%s, %s)'
						cursor.execute(sql, (startDate, beanCounter))
					connection.commit()
				beanCounter = 0
				startDate = datetime.date.today()
			beanCounter += 1
			api.create_favorite(status.id_str)

	myStreamListener = MyStreamListener()
	myStream = tweepy.Stream(auth=api.auth, listener=myStreamListener)

	myStream.filter(track=['beans'])
finally:
	connection.close()