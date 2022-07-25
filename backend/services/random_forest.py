'''Random Forest
Used as an interface for the Random Forest Decision
Tree model. 
'''
import os
import pandas as pd
from sklearn import preprocessing
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error
from sklearn.model_selection import train_test_split

class RandomForest:
    '''
    Class is used as an interface for scikit-learns Random Forest
    Decision Tree model. The objects attributes is where most 
    of the programs core lies in. Particularly the MEA attribute.
    '''

    def __init__(self, property_data_path: str, features: list, target: str):
        '''
        ### Functionality 
        Constructors for the RandomForest class.
        
        ### Parameters
        @property_data: path to the dataset CSV file.
        @features: list of features used for training the model.
        @target: the label you want to predict.

        ### Example
        >>> rf = RandomForest("./data.csv", ["price", "meter"], "price")
        >>> print(rf.mea)
        >>> 5101.84
        '''
        self.property_data_path = os.path.abspath(property_data_path)
        self.property_data = pd.read_csv(self.property_data_path)
        # print(property_data.describe())
        self.property_data = self.property_data.dropna(axis=0)  # drops not available data
        self.property_data_features = features   # features for the prediction
        self.y = self.property_data[target]  # prediction target
        self.X = self.property_data[self.property_data_features]
        self.property_prediction = None
        self.mea = 0
        self.train()

    def train(self) -> float:
        '''
        ### Functionality
        Used for training the model. The method automatically gets called when 
        the object is created.
        '''
        # split data into training and validation datasets 
        train_x, validation_x, train_y, validation_y = train_test_split(self.X, self.y, random_state = 0)

        property_model = RandomForestRegressor(random_state=1)
        property_model.fit(train_x, train_y)

        # checks how off the data is on average
        valid_predict = property_model.predict(validation_x)
        self.mea += mean_absolute_error(validation_y, valid_predict)

        # now for the entire dataset
        self.property_prediction = property_model.predict(self.X)


    def to_csv(self) -> None:
        '''
        ### Functionality
        Used for converting dataframe into csv file. Puts the original price, 
        original price/meter, and predicted prices into a csv file.
        ### Example
        >>> rf = RandomForest("./data.csv", ["price", "meter"], "price")
        >>> rf.to_csv() 
        '''
        # output to a csv file
        output = pd.DataFrame({
            'Price': self.property_data.price, 
            'Price/Meter': self.property_data.pricem,
            "Estimated Price": self.property_prediction 
        })
        output.to_csv('./backend/property_predictions.csv', index=False)


# rf = RandomForest(
#     '''./backend/datasets/property_data/clean_combined_toronto_property_data.csv''',
#     ['price', 'pricem'],'price'
# )
# print(rf.mea)
# rf.to_csv()