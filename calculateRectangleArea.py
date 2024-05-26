# def calculate_area(length, width):
#     if length <= 0 or width <= 0:
#         raise ValueError("Length and width must be positive numbers.")
#     return length * width

# length = 5
# width = 3
# try:
#     area = calculate_area(length, width)
#     print(f"The area of the rectangle is: {area}")
# except ValueError as e:
#     print(e)


# class Rectangle:
#     def __init__(self, length, width):
#         if length <= 0 or width <= 0:
#             raise ValueError("Length and width must be positive numbers.")
#         self.length = length
#         self.width = width

#     def calculate_area(self):
#         return self.length * self.width

# try:
#     rectangle = Rectangle(5, 3)
#     area = rectangle.calculate_area()
#     print(f"The area of the rectangle is: {area}")
# except ValueError as e:
#     print(e)

calculate_area = lambda length, width: length * width if length > 0 and width > 0 else ValueError("Length and width must be positive numbers.")

# Example usage:
length = 5
width = 3
try:
    area = calculate_area(length, width)
    print(f"The area of the rectangle is: {area}")
except ValueError as e:
    print(e)
