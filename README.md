# P.A.I.D-Personal-AI-Doctor


P.A.I.D (Personal AI Doctor) is a web-based application that allows users to interact with an AI model to get medical diagnoses based on input symptoms. The project leverages advanced techniques such as Retrieval-Augmented Generation (RAG) and Large Language Models (LLM). In this case, we used LLAMA 3 70B to convert user input into keywords and Mixtral 8x7B to process information provided by the vector database to craft a final response.

The user interface is designed to be user-friendly and is built with HTML, CSS, and JavaScript. This interface allows users to easily input their symptoms and receive responses from the AI model in real time. The backend of the application is implemented using Python and Flask, which handle API requests and ensure secure communication between the frontend and the AI model.

P.A.I.D integrates LLMs for generating responses to user inputs. By utilizing RAG, the system enhances the accuracy and relevance of these responses, making the interaction more effective. This combination of technologies allows for a robust and efficient platform for medical diagnosis.

The project structure includes several key files:

index.html: for the main user interface style.css: for styling the web page script.js: for frontend logic and interaction PAID.py: for the Flask backend server and general deployment/ingestion TrainingDataExample.txt: for sample training data used by the AI model Overall, P.A.I.D provides a powerful tool for users to get real-time medical advice through the integration of cutting-edge AI technologies. The platform is designed to be easily customizable and deployable on any suitable infrastructure. For more details, refer to the project files and the comments within the code.
