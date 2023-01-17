import  {pool} from  "./index.js"
import { seedData }  from  "./seed-data.js"


// create table 
export async function createPostsTable() {
  return await pool.query(
    `CREATE TABLE posts (
    posts_id serial PRIMARY KEY,
    plot_id INT REFERENCES plots(plot_id)
	  firebase_id VARCHAR ( 50 ) REFERENCES users(firebase_id),
	  title VARCHAR (200) NOT NULL,
	  description VARCHAR ( 1000 )  NOT NULL,
	  date DATE NOT NULL,
	  crop_id INT REFERENCES crops(crop_id),
  	project_started BOOLEAN DEFAULT FALSE,
    help_wanted BOOLEAN DEFAULT TRUE,
	  percentage_of_plot DECIMAL(3,2) DEFAULT 0.00
  );`
  );
}

// drop table 
export async function dropPostsTable() {
  return await pool.query("DROP TABLE IF EXISTS posts;");
}


// reset table 
export async function resetPostsTable() {
  return [
    await dropPostsTable(),
    await createPostsTable(),
    await seedPostsTable(),
  ];
}


// seed table 
export async function seedPostsTable() {
    return await pool.query(
      `INSERT INTO posts
      (plot_id, firebase_id, title, description, date, crop_id, project_started, help_wanted, percentage_of_plot)
  VALUES
      (2, 'tPcGjFOvZQQLjHGDOJ1Zea1vho92', 'Experienced Gardener Wanted for Vegetable Garden Maintenance', 'Seeking an experienced gardener for regular vegetable garden maintenance. Contact for details.', '12/01/2022', 3, TRUE, TRUE, 0.20),
(3,'ZyMPdmXZkvc13n3KRTWr81MABOj2', 'Help Needed with Vegetable Garden Planting and Care', 'New to growing white potatoes and seeking advice. Any tips appreciated!', '03/05/2022', 9, TRUE, FALSE, 0.50),
(4, 'R8zZ4FH5yCWMw0wFmVyQY5CiLsA2', 'Seeking Expert Advice for Successful Vegetable Gardening', 'I am a beginner with some gardening experience and free time on weekends. I have basic tools available. Seeking expert advice for successful vegetable gardening.', '07/09/2022', 2, TRUE, FALSE, 0.30),
(5,'JMlv172GdBXuxR2E2INgbsXImNx1', 'Volunteers Needed to Assist with Community Vegetable Garden', 'Our community vegetable garden is in need of volunteers to help with various tasks such as planting, watering, weeding, and harvesting. No gardening experience is necessary just a willingness to get your hands dirty and help out! We welcome people of all ages and abilities to join us. Please contact us if you are interested in volunteering or have any questions.', '11/06/2022', 7, TRUE, TRUE, 0.70),
(6, 'AmjYtjxN6ZV2yL9p50QzviJI3953', 'Looking for Gardening Partner to Grow Delicious Vegetables', 'Are you interested in growing your own fresh, delicious vegetables but dont have the space or knowledge to do it on your own?', '03/25/2022', 8, TRUE, FALSE, 0.20),
(2, 'tPcGjFOvZQQLjHGDOJ1Zea1vho92', 'In Search of a Vegetable Garden Help!', 'Seeking guidance for starting a vegetable garden! As an older individual with plenty of time on my hands, I am excited to try growing strawberries. Any tips or advice for a beginner would be greatly appreciated. Thank you!', '07/07/2022', 4, TRUE, TRUE, 0.40),
(3, 'ZyMPdmXZkvc13n3KRTWr81MABOj2', 'White Potatoes newbie - advice gratefully received!', 'Calling all potato experts! As a young, eager gardener, I am excited to try growing white potatoes. Any tips or advice for a fun and successful experience would be greatly appreciated. Thanks in advance', '02/02/2022', 1, TRUE, TRUE, 0.60),
(4, 'R8zZ4FH5yCWMw0wFmVyQY5CiLsA2', 'Need Help Getting Started with a Vegetable Garden', 'I am very new to the vegetable growing game and looking for a seasoned pro to lend some sage wisdom and maybe a hand or two. I''ve got all the tools we should need - just need the knowledge! Thanks in advance', '04/17/2022', 5, TRUE, FALSE, 0.80),
(5, 'JMlv172GdBXuxR2E2INgbsXImNx1', 'Seeking a Skilled Vegetable Gardener for Ongoing Maintenance', 'In need of a skilled vegetable gardener for ongoing maintenance! I have plenty of space for a garden, but limited time to devote to its upkeep. If you have a green thumb and are interested in helping out, please get in touch. Thank you!', '09/08/2022', 10, TRUE, TRUE, 0.10),
(6, 'AmjYtjxN6ZV2yL9p50QzviJI3953', 'Want to Learn How to Grow Your Own Vegetables? Lets Work Together!', 'Experienced gardener seeking to build a community of vegetable growers! If you''re interested in learning how to grow your own produce, let''s work together and share tips and techniques. Looking forward to getting our hands dirty and growing something great!', '10/28/2022', 6, TRUE, FALSE, 0.60),
(2, 'tPcGjFOvZQQLjHGDOJ1Zea1vho92', 'Tomato or not Tomato, that is the question!', 'I am trying to decide which vegetables to plant in my garden this year and I can''t decide if I want to include tomatoes or not. I love the taste of homegrown tomatoes but they can be finicky to grow. Any advice from experienced gardeners would be greatly appreciated.', '11/04/2022', 5, FALSE, TRUE, 0.10),
(3,'ZyMPdmXZkvc13n3KRTWr81MABOj2', 'Need Help with My Home Strawberry Garden', 'I recently started a home strawberry garden and have been having some difficulties getting my plants to thrive. I would love any tips or advice from experienced gardeners on how to improve the health of my strawberry plants.', '06/12/2022', 9, TRUE, TRUE, 0.30),
(4, 'R8zZ4FH5yCWMw0wFmVyQY5CiLsA2', 'Seeking a Vegetable Gardening Veteran for Delicious Potato Harvests', 'We''re seeking a vegetable gardening veteran to share their wisdom and experience with our community. Whether you''re a seasoned pro or just have a knack for growing delicious potatoes, we''d love to hear from you. Share your tips, tricks, and advice with us and help other gardeners achieve their potato-growing goals and share in the harvest!', '11/01/2022', 1, FALSE, TRUE, 0.50),
(5, 'JMlv172GdBXuxR2E2INgbsXImNx1', 'Learn How to Grow Your Own tasty White Mushrooms', 'Calling all mushroom enthusiasts! I am trying to grow white mushrooms at home, but I am having some trouble getting them to grow. Does anyone have any tips or tricks for successful mushroom cultivation?', '08/02/2022', 3, TRUE, TRUE, 0.10),
(6, 'AmjYtjxN6ZV2yL9p50QzviJI3953', 'Maximum Flavour Blackberry growing!', 'Hey everyone! I am trying to grow blackberries in my backyard and could use some advice. Does anyone have any experience with growing these delicious fruits?', '10/03/2022', 8, TRUE, TRUE, 0.20),
(2, 'tPcGjFOvZQQLjHGDOJ1Zea1vho92', 'Help wanted for a Home Lettuce crop', 'Calling all green thumbed friends! I am having trouble getting my lettuce to thrive in my garden. Any advice on how to keep the leaves crisp and the plants healthy? Thanks in advance for any suggestions!', '04/04/2022', 6, TRUE, TRUE, 0.20),
(3, 'ZyMPdmXZkvc13n3KRTWr81MABOj2', 'Seeking volunteers for Juicy Courgette Harvests', 'I have a large courgette crop this year and could use some extra hands to help with the harvest. If anyone is interested in volunteering, please don''t hesitate to contact me. Thank you!', '06/05/2022', 7, TRUE, TRUE, 0.10),
(4,'R8zZ4FH5yCWMw0wFmVyQY5CiLsA2', 'Looking for Tips on How to Grow Carrots Successfully', 'Hey friends! I am trying to grow carrots in my garden for the first time and could use some help. Thanks in advance for any suggestions!', '10/06/2022', 2, FALSE, TRUE, 0.10),
(5,'JMlv172GdBXuxR2E2INgbsXImNx1', 'Need Help with My Raspberries Any Suggestions?', 'I am having trouble with my raspberry plants and am seeking advice from experienced gardeners. Any suggestions or tips would be greatly appreciated!', '03/07/2022', 10, TRUE, TRUE, 0.20),
(6, 'AmjYtjxN6ZV2yL9p50QzviJI3953', 'Expert White Onion grower looking for muscle.', 'I am an expert white onion grower with a large crop ready for harvest. I am seeking strong and able-bodied individuals to assist with the physical labor. Please contact me for more details.', '03/08/2022', 4, FALSE, TRUE, 0.40);`
    );
  }