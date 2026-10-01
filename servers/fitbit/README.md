# Fitbit MCP by usefulapi

Read Fitbit profile, activity, sleep, heart rate and device data. Hosted, no local install.

**Live endpoint:** `https://fitbit.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "fitbit": {
      "url": "https://fitbit.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Fitbit credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `fitbit_get_profile` | read | Get profile |
| `fitbit_get_devices` | read | Get devices |
| `fitbit_daily_activity_summary` | read | Daily activity summary |
| `fitbit_activity_time_series` | read | Activity time series |
| `fitbit_activity_goals` | read | Activity goals |
| `fitbit_lifetime_stats` | read | Lifetime stats |
| `fitbit_heart_rate` | read | Heart rate |
| `fitbit_sleep_log` | read | Sleep log |
| `fitbit_weight_log` | read | Weight log |
| `fitbit_body_fat_log` | read | Body fat log |
| `fitbit_food_log` | read | Food log |
| `fitbit_water_log` | read | Water log |
| `fitbit_spo2` | read | SpO2 |
| `fitbit_hrv` | read | HRV |
| `fitbit_breathing_rate` | read | Breathing rate |
| `fitbit_cardio_score` | read | Cardio score |
| `fitbit_skin_temperature` | read | Skin temperature |
| `fitbit_usage_status` | meta | Usage status (free-tier meter) |
| `fitbit_upgrade` | meta | Upgrade to Pro (unlimited) |
| `fitbit_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `fitbit_upgrade` (it returns a Stripe Checkout link). Cancel any time with `fitbit_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `fitbit_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
