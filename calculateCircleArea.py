# import math

# def calculate_circle_area(radius):
#     return math.pi * radius**2

# radius = float(input("Enter the radius of the circle: "))
# area = calculate_circle_area(radius)
# print("The area of the circle is:", area)

#

import math

def calculate_circle_area(radius):
    return math.pi * radius**2

def main():
    radius = 5.0  # Example radius
    area = calculate_circle_area(radius)
    print(f"The area of the circle with radius {radius} is: {area}")

if __name__ == "__main__":
    main()
