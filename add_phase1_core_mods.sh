#!/bin/bash
set -e

# Expedition Guild: Stellar Frontier
# Phase 1 Batch 1: Core startup layer
# Minecraft: 1.20.1
# Loader: Forge

echo "Adding Phase 1 Batch 1 core mods..."

# Recipe viewer
packwiz modrinth add jei

# Performance optimization
packwiz modrinth add embeddium
packwiz modrinth add modernfix
packwiz modrinth add ferrite-core
packwiz modrinth add entityculling
packwiz modrinth add clumps

# Create core
# Important:
# - Choose Minecraft 1.20.1
# - Choose Forge
# - Avoid Create 6 if packwiz offers it
packwiz modrinth add create

echo "Refreshing pack index..."
packwiz refresh

echo "Done. Run: packwiz list"
