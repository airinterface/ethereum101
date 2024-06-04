#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Source the environment variables from the .env file
if [ -f ".env" ]; then
  source .env
else
  echo ".env file not found!"
  exit 1
fi

# Check if RPC_URL is set
if [ -z "$RPC_URL" ]; then
  echo "RPC_URL is not set in the .env file!"
  exit 1
fi

# Run the Forge deployment script
forge script script/DeployTokenRegistry.s.sol --broadcast --rpc-url $RPC_URL
