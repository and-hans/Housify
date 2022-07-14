income = 70000

home_price = 750000
down_payment = 250000

fixed_rate_5y = 4.34/100  # 4.34%
variable_rate_5y = 3.50/100  # 3.50%

property_tax_tor = 0.611013/100
prop_tax = home_price*property_tax_tor

amort_per = 25

def home_monthly_payments(rate):
  total_home = home_price-down_payment
  interest = rate/12
  total_months = amort_per*12

  numer = (interest*(1+interest)**(total_months))
  denom = ((1+interest)**(total_months)-1)

  return round(total_home*(numer/denom), 2)

def total_monthly_payments(mortgage):
  property_tax = (prop_tax)/12
  home_insurance = (1250)/12
  return round(mortgage+home_insurance+property_tax, 2)

def interest_quo_original(mortgage):
  paid = mortgage*amort_per*12
  total = home_price-down_payment
  return (paid-total)

def can_afford(total):
  ideal_home_to_income = 32/100  # 32%
  monthly_income = income/12
  quo = (total/monthly_income)
  if quo < ideal_home_to_income:
    return(f'You can afford it! Mortgage is {quo*100}% of income')
  else:
    return(f'You cannot afford it! Mortgage is {quo*100}% of income')

mort = home_monthly_payments(fixed_rate_5y)
tot = total_monthly_payments(mort)
diff = interest_quo_original(mort)
afford = can_afford(tot)
print(mort)
print(tot)
print(diff)
print(afford)
