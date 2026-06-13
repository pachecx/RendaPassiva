export default function FinanceDashboard() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-[#0B0F19] text-white rounded-2xl p-6 border border-white/10 shadow-2xl backdrop-blur-xl">
      
      {/* Top stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        
        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
          <p className="text-xs text-gray-400">Patrimônio Total</p>
          <h3 className="text-xl font-bold mt-1">R$ 842.350</h3>
          <span className="text-green-400 text-sm">+12,4% este ano</span>
        </div>

        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
          <p className="text-xs text-gray-400">Renda Passiva</p>
          <h3 className="text-xl font-bold mt-1">R$ 4.280/mês</h3>
          <span className="text-green-400 text-sm">Dividendos</span>
        </div>

        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
          <p className="text-xs text-gray-400">Proventos (12m)</p>
          <h3 className="text-xl font-bold mt-1">R$ 51.360</h3>
          <span className="text-blue-400 text-sm">Acumulado</span>
        </div>

        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
          <p className="text-xs text-gray-400">Carteira</p>
          <h3 className="text-xl font-bold mt-1">Dividendos</h3>
          <span className="text-gray-400 text-sm">FIIs + Ações</span>
        </div>

      </div>

      {/* Chart area mock */}
      <div className="bg-white/5 rounded-xl border border-white/10 p-5">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-sm text-gray-300">Evolução Patrimonial</h4>
          <span className="text-green-400 text-xs">+ crescimento constante</span>
        </div>

        {/* Fake chart */}
        <div className="h-32 relative overflow-hidden">
          <div className="absolute inset-0 flex items-end gap-2">
            <div className="w-3 h-10 bg-green-500/40 rounded"></div>
            <div className="w-3 h-14 bg-green-500/50 rounded"></div>
            <div className="w-3 h-20 bg-green-500/60 rounded"></div>
            <div className="w-3 h-16 bg-green-500/50 rounded"></div>
            <div className="w-3 h-28 bg-green-500/70 rounded"></div>
            <div className="w-3 h-24 bg-green-500/60 rounded"></div>
            <div className="w-3 h-32 bg-green-500/80 rounded"></div>
          </div>

          {/* glow effect */}
          <div className="absolute inset-0 bg-green-500/10 blur-2xl"></div>
        </div>
      </div>

      {/* Bottom insight */}
      <div className="mt-5 flex items-center justify-between">
        <p className="text-xs text-gray-400">
          Estratégia: longo prazo + reinvestimento de dividendos
        </p>

        <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs">
          Renda crescente
        </div>
      </div>
    </div>
  );
}