# def check_even_or_odd(number):
#     if number % 2 == 0:
#         print(f"{number} is even.")
#     else:
#         print(f"{number} is odd.")

# # Example usage:
# number = 4
# check_even_or_odd(number)

def check_even_or_odd(number):
    if number & 1 == 0:
        print(f"{number} is even.")
    else:
        print(f"{number} is odd.")

# Example usage:
number = 4
check_even_or_odd(number)
