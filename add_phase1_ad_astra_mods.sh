#!/bin/bash
set -e

# Expedition Guild: Stellar Frontier
# Phase 1 Batch 2: Ad Astra compatibility layer
# Minecraft: 1.20.1
# Loader: Forge

echo "Adding Phase 1 Batch 2 Ad Astra mods..."

# Ad Astra core and common dependencies
packwiz modrinth add ad-astra
packwiz modrinth add botarium
packwiz modrinth add resourceful-lib
packwiz modrinth add resourceful-config
packwiz modrinth add cloth-config

# Create x Ad Astra compatibility
# If Modrinth cannot find this, use CurseForge instead:
# packwiz curseforge add create-ad-astra-compatibility
packwiz curseforge add create-ad-astra-compatibility

echo "Refreshing pack index..."
packwiz refresh

echo "Done. Run: packwiz list"
