#!/bin/bash
set -e

# Expedition Guild: Stellar Frontier
# Phase 1 Batch 2: Ad Astra compatibility layer
# Minecraft: 1.20.1
# Loader: Forge
#
# 注意：
# 1. Create 已鎖定為 1.20.1-0.5.1.j
# 2. 不要升級到 Create 6
# 3. Ad Astra 加入後，不建議在正式世界中移除

echo "Adding Phase 1 Batch 2 Ad Astra mods..."

# Ad Astra core
packwiz modrinth add ad-astra

# Common Ad Astra dependencies
packwiz modrinth add botarium
packwiz modrinth add resourceful-lib
packwiz modrinth add resourceful-config
packwiz modrinth add cloth-config

# Create x Ad Astra compatibility
# 如果這個 slug 搜不到，packwiz 可能會要求互動式選擇。
# 請選擇支援 Minecraft 1.20.1 Forge 並相容 Create 0.5.1 系列的版本。
packwiz curseforge add create-ad-astra-compatibility

echo "Refreshing pack index..."
packwiz refresh

echo "Done. Run:"
echo "packwiz list"
echo "cat mods/create.pw.toml"
