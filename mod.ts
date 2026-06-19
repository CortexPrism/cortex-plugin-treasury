// deno-lint-ignore-file require-await, no-unused-vars
import type { PluginContext, Tool, ToolResult } from 'cortex/plugins';
function ok(n: string, o: unknown, s: number): ToolResult {
  return {
    toolName: n,
    success: true,
    output: JSON.stringify(o, null, 2),
    durationMs: Date.now() - s,
  };
}

const treasury_get_balancesTool: Tool = {
  definition: {
    name: 'treasury_get_balances',
    description: 'Get account balances across currencies',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[treasury] treasury_get_balances executed');
      return ok('treasury_get_balances', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'treasury_get_balances',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const treasury_forecast_cashflowTool: Tool = {
  definition: {
    name: 'treasury_forecast_cashflow',
    description: 'Generate cash flow forecast',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[treasury] treasury_forecast_cashflow executed');
      return ok('treasury_forecast_cashflow', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'treasury_forecast_cashflow',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const treasury_convert_currencyTool: Tool = {
  definition: {
    name: 'treasury_convert_currency',
    description: 'Get FX rates and simulate conversions',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[treasury] treasury_convert_currency executed');
      return ok('treasury_convert_currency', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'treasury_convert_currency',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const treasury_initiate_transferTool: Tool = {
  definition: {
    name: 'treasury_initiate_transfer',
    description: 'Initiate wire transfer with approval gate',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[treasury] treasury_initiate_transfer executed');
      return ok('treasury_initiate_transfer', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'treasury_initiate_transfer',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

export async function onLoad(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-treasury] Loaded');
}
export async function onUnload(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-treasury] Unloading...');
}
export const tools: Tool[] = [
  treasury_get_balancesTool,
  treasury_forecast_cashflowTool,
  treasury_convert_currencyTool,
  treasury_initiate_transferTool,
];
