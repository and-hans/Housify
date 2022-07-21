''' Web Scrap
This module is used for scrapping municipal website property
tax data. 

TODO: 
    - Add support for other areas in the GTA
'''
import os
import re
import requests
from bs4 import BeautifulSoup


class PropertyTax:
    '''
    ### Functionality
    Used for collecting municipal website property tax data. 
    
    The residential property tax rates are stored in the objects 
    residential rates attribute. Just call 
    `PropertyTax().residential_rates` to get the data.

    ### Supported Cities
    - Toronto
    '''
    def __init__(self):
        self.city = 'Toronto'
        self.URL = 'https://www.toronto.ca/services-payments/property-taxes-utilities/property-tax/property-tax-rates-and-fees/'
        self.page = requests.get(self.URL)
        self.soup = BeautifulSoup(self.page.content, "html.parser")
        self.results = None
        self._residential_rates = {}
        self.toronto_residential_rates()

    def toronto_residential_rates(self):
        '''
        ### Functionality
        Used for modifying the object residential rates attribute
        with the data provided on the Toronto municipal website.

        This class does automatically gets called after the object is
        created.
        '''
        # gets the table data
        parent = self.soup.find(id='accordion-property-tax-rates')
        self.results = parent.find_all('table', class_="cot-table")
        property_taxes = parent.find_all(lambda tag: tag.name == 'td' )

        # remove converts to a string and removes <td> and </td>
        formatted = []
        for i in property_taxes:
            temp = re.sub(r"<td>", '', str(i))
            formatted.append(re.sub(r'</td>', '', str(temp)))

        # stores the scrapped information as object attributes
        tax_types = [
            'Type', 'City Tax Rate', 'Education Tax Rate',
            'City Building Fund', 'Total Tax Rate'
        ]
        for i in range(len(tax_types)):
            self._residential_rates[tax_types[i]] = formatted[i]

    @property
    def residential_rates(self):
        '''
        ### Functionality
        Getter for the residential rates attribute.

        ### Example
        >>> from web_scrap import PropertyTax
        >>> toronto = PropertyTax()
        >>> res_rates = toronto.residential_rates
        >>> print(res_rates)
        >>> {'Type': 'Residential, 
            ...'City Tax Rate': '0.1%',
            ...'Education Tax Rate': '0.2%',
            ...'City Building Fund': '0.3%', 
            ...'Total Tax Rate': '0.5%'}
        '''
        return self._residential_rates

    def write_to_html(self) -> str:
        '''
        ### Functionality
        Writes the resulting table data, gathered from the
        toronto_residential_rates method, into to a html file called
        'property_tax_rates.html'.

        ### Example
        >>> from web_scrap import PropertyTax
        >>> toronto = PropertyTax()
        >>> toronto.write_to_html()
        >>> File written to: /Users/property_tax_rates.html
        '''
        # current os path to the property_tax_rates.html file
        path = os.path.abspath('property_tax_rates.html')
        # writes the data to the html file
        with open(path, 'w') as f:
            f.write(str(self.results))

        return f'File written to: {path}'
