def calculate_area(length, width):
    if length <= 0 or width <= 0:
        raise ValueError("Length and width must be positive numbers.")
    return length * width

length = 5
width = 3
try:
    area = calculate_area(length, width)
    print(f"The area of the rectangle is: {area}")
except ValueError as e:
    print(e)
