# Referral Rock MCP by usefulapi

Read Referral Rock programs, members, referrals, rewards and payouts; add members and referrals.

**Live endpoint:** `https://referral-rock.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/referral-rock

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://referral-rock.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http referral-rock https://referral-rock.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=referral-rock&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Freferral-rock.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "referral-rock": {
      "url": "https://referral-rock.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Referral Rock credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/referral-rock/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Referral Rock **public** and **private API keys** (Integrations → API Keys).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `referralrock_list_programs` | read | List referral programs |
| `referralrock_get_program` | read | Get referral program by name |
| `referralrock_list_reward_rules` | read | List program reward rules |
| `referralrock_list_members` | read | List members (advocates) |
| `referralrock_get_member_stats` | read | Get member statistics |
| `referralrock_list_referrals` | read | List referrals (leads) |
| `referralrock_get_referral` | read | Get referral |
| `referralrock_list_rewards` | read | List rewards |
| `referralrock_list_pending_payouts` | read | List pending payouts |
| `referralrock_list_payout_transactions` | read | List payout transactions |
| `referralrock_create_member` | **write** | Add a member to a program |
| `referralrock_update_member` | **write** | Update a member |
| `referralrock_create_referral` | **write** | Add a referral |
| `referralrock_update_referral` | **write** | Update a referral (status, amount, notes) |
| `referralrock_record_customer` | **write** | Record a customer purchase |
| `referralrock_usage_status` | meta | Usage status (free-tier meter) |
| `referralrock_request_feature` | meta | Request a missing feature |
| `referralrock_upgrade` | meta | Upgrade to Pro or Pro+ |
| `referralrock_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `referralrock_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `referralrock_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `referralrock_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Referral Rock.
