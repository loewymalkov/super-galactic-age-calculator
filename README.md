# SUPER GALACTIC AGE CALCULATOR

## USE - SET-UP

## SPECS

*EY: earth years

| Behavior | Input | Output |
|-|-|-|
| _it can take user input for age_ | 19 (input form)| "19" |
| _it can return years remaining from preset life expectancy average_ | 19 (avg. 75) | 56 |
| _it can return number of years past life expectancy_  | 76 (avg. 75)| 1 |
| _it can check age under conditions of a Mercury 24 EY cycle_| 24 | 1|
| _it can check age under conditions of a Venus 62 EY cycle_ | 31 | 0.5 |
| _it can check age under conditions of a Mars 1.88 EY cycle_ | 15 | 28.2 |
| _it can check age under conditions of a Jupiter 11.86 EY cycle_| | |
| _it can return years remaining for each EY cycle type_  | 24 (avg. 75, ey. 24)| 3 years remaining (3.125 rounded) |
| _it can return number of years past life expectancy for each EY cycle type_ | 76 (avg. 75, ey. 24) | 0 (0.04166666666 rounded)|


| Test | Input | Output |
|-|-|-|
| _it will test that all following tests can fail_| - | false |
| _it will test that function returns the correct amount of remaining years_ | 19 | 56 |
| _it will test that function returns the correct amount of years past life expectancy_| 76 | 1 |
| _it will test that function returns the correct age under given EY cycle conditions_| 24 (for 24EY cycle) | 1 | 
| _it will test that function returns the correct amount of remaining years for a given EY cycle_ | 24 | 3.125 | 
| _it will test that function returns the correct amount of years past expectancy_ | 76 | 0 |

## AUTHOR

Loewy Malkovich
loewymalkov@gmail.com

## LICENSE

Free use license (MIT) 2019. 