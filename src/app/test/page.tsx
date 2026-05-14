'use client'

import { useState } from 'react'
import { Icon } from '@/components/common/Icon' // Icon 컴포넌트 경로에 맞게 수정하세요

export default function IconTestPage() {
  const [level, setLevel] = useState(5)

  return (
    <div className="min-h-screen bg-slate-950 p-10 text-white">
      <h1 className="mb-10 text-3xl font-bold text-slate-200">
        Icon System Test
      </h1>

      {/* 레벨 조절 슬라이더 */}
      <div className="mb-12 rounded-xl border border-slate-800 bg-slate-900 p-6">
        <label className="mb-4 block text-sm font-medium text-slate-400">
          Pattern Level Control:{' '}
          <span className="text-primary text-lg font-bold">{level}</span>
        </label>
        <input
          type="range"
          min="0"
          max="9"
          value={level}
          onChange={(e) => setLevel(parseInt(e.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-700 accent-blue-500"
        />
        <div className="mt-2 flex justify-between text-xs text-slate-500">
          <span>Level 0</span>
          <span>Level 9</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* 1. 패턴 아이콘 섹션 */}
        <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-6 border-b border-slate-800 pb-2 text-xl font-semibold text-blue-400">
            Dynamic Patterns
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="text-center">
              <Icon name="pattern1" level={level} className="mb-2" />
              <p className="text-xs text-slate-500">Pattern 1</p>
            </div>
            <div className="text-center">
              <Icon name="pattern2" level={level} className="mb-2" />
              <p className="text-xs text-slate-500">Pattern 2</p>
            </div>
            <div className="text-center">
              <Icon name="pattern3" level={level} className="mb-2" />
              <p className="text-xs text-slate-500">Pattern 3</p>
            </div>
          </div>
        </section>

        {/* 2. 정적 아이콘 섹션 */}
        <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-6 border-b border-slate-800 pb-2 text-xl font-semibold text-green-400">
            Static Icons (SVGR)
          </h2>
          <div className="flex h-[100px] flex-wrap items-center justify-center gap-12">
            <div className="text-center">
              <Icon
                name="close"
                className="mb-2 cursor-pointer transition-transform hover:scale-110"
              />
              <p className="text-xs text-slate-500">Close</p>
            </div>
            <div className="text-center">
              <Icon
                name="calendar"
                className="mb-2 cursor-pointer transition-colors hover:text-blue-400"
              />
              <p className="text-xs text-slate-500">Calendar</p>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-slate-600 italic">
            * 정적 아이콘은 레벨의 영향을 받지 않으며, 호버 시 색상/크기 변화
            테스트 가능
          </p>
        </section>
      </div>

      {/* 사용 예시 코드 가이드 */}
      <div className="mt-12 rounded-lg border border-slate-800 bg-black p-6">
        <h3 className="mb-4 font-mono text-sm text-slate-500">
          // Usage Example
        </h3>
        <pre className="overflow-x-auto font-mono text-xs text-blue-300">
          {`<Icon name="pattern1" level={${level}} className="custom-class" />\n<Icon name="close" className="text-red-500" />`}
        </pre>
      </div>
    </div>
  )
}
