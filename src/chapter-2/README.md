# Chapter 2 - Traditional AI

Machine Learning is not new. The field of Artificial Intelligence (AI) has been around since the 1950s, and many of the techniques we use today have their roots in traditional AI methods.

Traditional AI, can help you with:
* Predictive Analytics
* Classification: Spam detection, sentiment analysis, Fraud detection
* Clustering: Customer segmentation, Anomaly detection
* Optimization: Resource allocation, Scheduling

Traditional AI, you need train a model. Usually by spliting your data into 3 buckets. 
* 60% Training Data
* 20% Validation Data
* 20% Test Data

The result of the training will be a machine learning model. If the training is done right, the model will perform well. However if the problem is too simple, you will have a `Underfitting` problem. If the problem is too complex, you will have a `Overfitting` problem.

Each one can be fixed by:
Underfitting:
* Add more features (more data)
* Increase the model complexity (linear->polynomial)
* Change model Algorithim / Architecture (more layers/neurons)
* Reduce Regularization (penalty on the loss_function)
* More training epochs(batches)

Overfitting: 
* The model is too complex and captures the noise in 
* More training data
* Reduce the model complexity
* Reduce the number of features
* Increase Regularization
* Early Stopping