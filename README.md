
# Agamotto

Deepfake videos use artificial intelligence (AI), specifically deep learning techniques, to create highly realistic manipulated videos. These videos can replace or alter a person’s face, voice, or actions to make it appear as if they are saying or doing something they never actually did. The term “deepfake” is derived from “deep learning” and “fake,” highlighting the AI-driven nature of these manipulations.

### Why are Deepfakes Concerning?

	1.	Disinformation and Misinformation: Deepfakes can be used to spread false information by making it appear as though public figures, celebrities, or ordinary individuals have said or done things they haven’t. This undermines trust in digital media and can lead to confusion, especially in political or sensitive contexts.
	2.	Harassment and Blackmail: Deepfake technology has been used to create non-consensual, explicit content, often targeting individuals in an attempt to humiliate, blackmail, or defame them.
	3.	Threat to Public Trust: As deepfakes become more convincing, it becomes harder to trust video evidence. This creates a “liar’s dividend,” where people can deny the authenticity of genuine videos, claiming they are fake, eroding trust in video as a form of proof.
	4.	Criminal Use: Deepfakes can be used for identity theft, fraud, and impersonation, particularly in instances where fake videos or audio can deceive biometric authentication systems or individuals.


## Architecture

![App Screenshot](https://agamotto.pages.dev/Flowchart.png)

## Tech Stack

**Client:** NextJS, TailwindCSS, MagicUI, AceternityUI

**Server:** Flask, Tensorflow

## Folder Structure

```bash
AGAMOTTO/
├── assets/
├── backend/
│   ├── output/
│   ├── uploads/
│   ├── Agamotto_AWS_KeyPair.pem
│   ├── DF_2.keras
│   ├── dockerfile                    # Backend Dockerfile
│   ├── main2.py
│   ├── predict3.py
│   └── requirements.txt
├── frontEnd/
│   ├── app/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   ├── public/
│   ├── .dockerignore                 # Docker ignore file for frontend
│   ├── components.json
│   ├── Dockerfile                    # Frontend Dockerfile
│   ├── jsconfig.json
│   ├── next.config.mjs
│   ├── package.json
│   ├── postcss.config.mjs
│   └── tailwind.config.js
├── rawPython/
└── docker-compose.yml                # Docker Compose file

```
## Run Locally

Clone the project

```bash
  git clone https://github.com/djdiptayan1/Agamotto.git
```

Go to the project directory

```bash
  cd Agamotto
```
Go to the frontend directory and install dependencies and run start the client

```bash
  cd frontEnd
  npm install
  npm run start
```

Go to the backend directory and install dependencies

```bash
  cd backend
  pip3 install -r requirements.txt
```

Start the backend server in production mode

```bash
  gunicorn -w 4 -b 0.0.0.0:3001 main2:app
```

## Screenshots

![App Screenshot](https://agamotto.pages.dev/intro.png)
![App Screenshot](https://agamotto.pages.dev/stats.png)
![App Screenshot](https://agamotto.pages.dev/feasibility.png)


## Contributers

- [@Diptayan](https://www.github.com/djdiptayan1)
- [@Srijit](https://www.github.com/SrijitK10 )
- [@Palash](https://www.github.com/shahpalash10)
- [@Gauri](https://www.github.com/GauriChapra)
- [@Siddhima](https://www.github.com/SaltyLemonz)
- [@Abhinav](https://www.github.com/Abhinav-Prajapati)

