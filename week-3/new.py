

import pandas as pd

file_path = "large_dataset.csv"
chunksize = 10_000

# Read the CSV file in chunks
data_reader = pd.read_csv(file_path, chunksize=chunksize)

# Process each chunk
for chunk in data_reader:
    # Perform operations on the chunk (e.g., filtering, aggregation, etc.)
    processed_chunk = process_chunk(chunk)
    # Save or append the processed chunk to a new file or data structure
    save_processed_chunk(processed_chunk)



library(dplyr)

# Create a sample dataset
data <- data.frame(
  id = 1:5,
  price = c(10, 20, 30, 40, 50),
  quantity = c(2, 4, 6, 8, 10)
)

# Use 'mutate()' to create a new column 'total_cost' (price * quantity)
data_with_total_cost <- data %>%
  mutate(total_cost = price * quantity)

# Use 'transmute()' to create a new column 'total_cost' (price * quantity) and keep only 'id' and 'total_cost'
id_and_total_cost <- data %>%
  transmute(id, total_cost = price * quantity)


#Eyosiyas


