import React from 'react';

const ModelResult = () => {
    // Data for classification report
    const data = [
        { class: 'Real', precision: 0.75, recall: 0.79, f1: 0.77, support: 607 },
        { class: 'Face2Face', precision: 0.86, recall: 0.87, f1: 0.87, support: 874 },
        { class: 'DeepfakeDetection', precision: 0.97, recall: 0.94, f1: 0.96, support: 237 },
        { class: 'FaceShifter', precision: 0.93, recall: 0.85, f1: 0.89, support: 867 },
        { class: 'NeuralTextures', precision: 0.74, recall: 0.84, f1: 0.79, support: 851 },
        { class: 'FaceSwap', precision: 0.89, recall: 0.83, f1: 0.86, support: 897 },
    ];

    const overallMetrics = {
        accuracy: 0.84,
        macroAvg: { precision: 0.86, recall: 0.85, f1: 0.85, support: 4333 },
        weightedAvg: { precision: 0.85, recall: 0.84, f1: 0.84, support: 4333 },
    };

    return (
        <div className="max-w-4xl mx-auto my-8 p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-white font-mono">
                Classification Report
            </h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b-2 border-gray-200 dark:border-gray-700 text-left text-xs sm:text-sm md:text-base font-medium text-gray-600 dark:text-gray-300"></th>
                            <th className="px-4 py-2 border-b-2 border-gray-200 dark:border-gray-700 text-left text-xs sm:text-sm md:text-base font-medium text-gray-600 dark:text-gray-300">Precision</th>
                            <th className="px-4 py-2 border-b-2 border-gray-200 dark:border-gray-700 text-left text-xs sm:text-sm md:text-base font-medium text-gray-600 dark:text-gray-300">Recall</th>
                            <th className="px-4 py-2 border-b-2 border-gray-200 dark:border-gray-700 text-left text-xs sm:text-sm md:text-base font-medium text-gray-600 dark:text-gray-300">F1-Score</th>
                            <th className="px-4 py-2 border-b-2 border-gray-200 dark:border-gray-700 text-left text-xs sm:text-sm md:text-base font-medium text-gray-600 dark:text-gray-300">Support</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                                <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 text-xs sm:text-sm md:text-base font-bold text-gray-800 dark:text-gray-100">{row.class}</td>
                                <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-100">{row.precision.toFixed(2)}</td>
                                <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-100">{row.recall.toFixed(2)}</td>
                                <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-100">{row.f1.toFixed(2)}</td>
                                <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-100">{row.support}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="font-semibold bg-gray-100 dark:bg-gray-700">
                            <td className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-100">Accuracy</td>
                            <td className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-100"></td> {/* Blank Precision */}
                            <td className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-100"></td> {/* Blank Recall */}
                            <td className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-100">{overallMetrics.accuracy.toFixed(2)}</td>
                            <td className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-100">{overallMetrics.macroAvg.support}</td>
                        </tr>
                        <tr className="bg-gray-50 dark:bg-gray-600">
                            <td className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-100">Macro Avg</td>
                            <td className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-100">{overallMetrics.macroAvg.precision.toFixed(2)}</td>
                            <td className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-100">{overallMetrics.macroAvg.recall.toFixed(2)}</td>
                            <td className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-100">{overallMetrics.macroAvg.f1.toFixed(2)}</td>
                            <td className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-100">{overallMetrics.macroAvg.support}</td>
                        </tr>
                        <tr className="bg-gray-50 dark:bg-gray-600">
                            <td className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-100">Weighted Avg</td>
                            <td className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-100">{overallMetrics.weightedAvg.precision.toFixed(2)}</td>
                            <td className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-100">{overallMetrics.weightedAvg.recall.toFixed(2)}</td>
                            <td className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-100">{overallMetrics.weightedAvg.f1.toFixed(2)}</td>
                            <td className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-100">{overallMetrics.weightedAvg.support}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default ModelResult;