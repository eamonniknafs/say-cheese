# say-cheese
Group photos made easy! Remember all those times you've struggled to take a group photo with no one to take it for you? Does your timer take bad photos? No worries, just say cheese!

## Instructions
- Clone the repo.
- Run the following:

        $ yarn
        $ expo start
  
- Install the expo client app, and scan the QR code to run the app in the Expo environment.

*Will be available on the Apple App Store soon. Google Play Store will follow soon after*.

## Developers
* Eamon Niknafs: Project Lead
* Daniel Shimon: Technical Lead
* Chase Maivald: Specification Lead

## Inspiration
We have all had bad experiences trying to take photos with friends, or even by ourselves whenever no one is around to take them. We thought we would make a clean and easy way to solve this problem.

## What it does
Nobody wants to take a photo without looking their best. To match the intention of every user, we detect the strength of your smiles, and whether or not your eyes are closed in photos. This aids clogged phone memory with picture after picture, as the number of shutter photos can be specified beforehand. This goes hand in hand with how many people in your photo should be smiling/not blinking, which is validated to work with more friends than you may even fit in a photo. The pictures are auto-focused, can be taken from a distance, and waits until friend(s) smile/open their eyes, ready to be captured in an image. Captured images are moved to the camera roll.

All the image processing and analysis are done on device! Your photos never leave the safety and security of your phone. Say goodbye to the cloud and hello to privacy!

## How we built it
We used React Native / Expo, as Expo makes it super easy to test and run on iPhone or Android. We started off getting the camera to work using Expo's Camera API. Next came designing the home page to allow users to customize their preferences on whether or not they cared to be smiling, as well as the number of people in the photos, and how many photos they wanted. Finally, we set the camera up to take photos according to the user's preferences.

## Challenges we ran into
Settling upon which application to build in a little under 1.5 days did take more time than expected. Each idea was in good spirit, but it was certainly frustrating to stay up until 3 AM EST before all agreeing to run with one project. Technical difficulties were experienced by the fact expo-face-detector doesn't have too many up-to-date docs written in React Native functional components, but we came together with the strongest collective knowledge of React Native than our last (also our first) hackathon.

## Accomplishments that we're proud of
We are confident enough in the quick formation of this project to push it to the app store. The name is catchy, but we expect the product to be catchier. On all fronts, this is a step forward for us as a team. We each worked harder, also smarter, to finish half a day before the submission is finally due. Hopefully, this procrastination-free spirit may bleed into our upcoming semesters @Boston University. The feelings we'll leave this hackathon with are necessary for developers to develop themselves as people

We are proud to design an app that works as we intended! All of us are pretty new to React Native, so it felt good to learn more. We also learned some design principles, as well as got more practice with implementing APIs.

## What we learned
We learned React Native isn't the worst beast on Earth; it can be managed with a relentless passion for the field. We expect to use it as a tool for positive change. Our goals don't care about our feelings, yet we consolidated our efforts humbly and with fervor. Being more inventive than the docs available to us, as well as following responsive web design practices is a constant effort, but we improved from our last iteration as a team.

## What's next for Say Cheese
Say Cheese is proud to attempt to head to Apple's App Store. We believe our app is simple and effective, and users will be able to benefit from its features.

Some improvements we plan to make in the future include voice detection for the user to give commands such as pause, stop, etc.
