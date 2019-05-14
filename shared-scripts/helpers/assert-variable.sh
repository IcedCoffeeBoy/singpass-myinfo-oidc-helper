#!/bin/bash

echo ==============================================================================
echo Script: $(basename "$0")
echo This script asserts that the variable has been set
echo ==============================================================================

# ==============================================================================
# Inputs
# ==============================================================================

VARIABLE_NAME=${1}

# ==============================================================================
# Script
# ==============================================================================

echo "Asserting ${VARIABLE_NAME}"
if [ -z ${!VARIABLE_NAME} ] || [ ${!VARIABLE_NAME} == "" ]; then
	echo "${VARIABLE_NAME} must be set"
	exit 1
fi
