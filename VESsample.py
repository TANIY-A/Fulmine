def ves_algorithm():
    tasks = []
    voltages = []
def ves_algorithm(tasks, voltages):
    # Sort tasks based on efficiency
    tasks.sort(key=lambda x: x.efficiency, reverse=True)
    
    # Initialize schedule and energy variables
    schedule = []
    energy = 0
    
    # Iterate through tasks
    for task in tasks:
        # Find the minimum voltage that satisfies the task's deadline
        min_voltage = min(voltages, key=lambda x: x >= task.deadline)
        
        # Add the task to the schedule
        schedule.append((task, min_voltage))
        
        # Update the energy variable
        energy += task.power * min_voltage
    # Prompt user to input tasks and voltages
    print("Enter number of tasks:")
    num_tasks = int(input())
    for I in range(num_tasks):
        print("Enter task", i+1, "deadline:")
        deadline = float(input())
        print("Enter task", i+1, "power:")
        power = float(input())
        print("Enter task", i+1, "efficiency:")
        efficiency = float(input())
        tasks.append(Task(deadline, power, efficiency))
    
    print("Enter number of voltages:")
    num_voltages = int(input())
    for I in range(num_voltages):
        print("Enter voltage", i+1, ":")
        voltage = float(input())
        voltages.append(voltage)
    
    # Call the ves_algorithm() function with the input lists as arguments
    return ves_algorithm(tasks, voltages)